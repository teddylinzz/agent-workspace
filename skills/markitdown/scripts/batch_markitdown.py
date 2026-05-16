#!/usr/bin/env python3
"""Batch-convert files to Markdown with MarkItDown."""

from __future__ import annotations

import argparse
import glob
import json
import os
from pathlib import Path
import sys
import traceback
from typing import Iterable

try:
    from markitdown import MarkItDown
except Exception as exc:  # pragma: no cover - useful as a CLI diagnostic
    print(
        "Could not import markitdown. Install it with: python -m pip install 'markitdown[all]'",
        file=sys.stderr,
    )
    print(f"Import error: {exc}", file=sys.stderr)
    sys.exit(2)


MARKDOWN_EXTENSIONS = {".md", ".markdown"}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Convert files or directories to one Markdown file per input using MarkItDown."
    )
    parser.add_argument("inputs", nargs="+", help="Files, directories, URLs, or glob patterns.")
    parser.add_argument("-o", "--output-dir", default="markdown", help="Directory for .md outputs.")
    parser.add_argument("-r", "--recursive", action="store_true", help="Recurse into directories.")
    parser.add_argument("--glob", action="store_true", help="Expand input arguments as glob patterns.")
    parser.add_argument("--mirror", action="store_true", default=True, help="Mirror directory structure.")
    parser.add_argument("--flat", action="store_true", help="Write all outputs directly under output-dir.")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing .md outputs.")
    parser.add_argument(
        "--include-markdown",
        action="store_true",
        help="Also convert .md and .markdown input files.",
    )
    parser.add_argument("--use-plugins", action="store_true", help="Enable installed MarkItDown plugins.")
    parser.add_argument("--docintel-endpoint", help="Azure Document Intelligence endpoint.")
    parser.add_argument("--keep-data-uris", action="store_true", help="Keep data URIs in output.")
    parser.add_argument(
        "--continue-on-error",
        action="store_true",
        help="Continue converting remaining files after an error.",
    )
    parser.add_argument(
        "--fail-empty",
        action="store_true",
        help="Treat empty Markdown output as a conversion failure.",
    )
    return parser.parse_args()


def expand_inputs(inputs: Iterable[str], use_glob: bool) -> list[str]:
    expanded: list[str] = []
    for item in inputs:
        matches = glob.glob(item, recursive=True) if use_glob else []
        expanded.extend(matches if matches else [item])
    return expanded


def iter_files(path: Path, recursive: bool) -> Iterable[Path]:
    if path.is_file():
        yield path
    elif path.is_dir():
        pattern = "**/*" if recursive else "*"
        for child in sorted(path.glob(pattern)):
            if child.is_file():
                yield child


def safe_stem(path: Path | str) -> str:
    if isinstance(path, Path):
        return path.stem or "output"
    return (
        str(path)
        .replace("://", "_")
        .replace("/", "_")
        .replace("\\", "_")
        .replace("?", "_")
        .replace("&", "_")
        .strip("._")
        or "output"
    )


def output_path_for(
    source: Path | str,
    root: Path | None,
    output_dir: Path,
    mirror: bool,
) -> Path:
    if isinstance(source, Path):
        if mirror and root is not None:
            try:
                relative = source.relative_to(root)
            except ValueError:
                relative = Path(source.name)
            target = output_dir / relative.with_suffix(".md")
        else:
            target = output_dir / f"{safe_stem(source)}.md"
    else:
        target = output_dir / f"{safe_stem(source)}.md"
    return target


def is_relative_to(path: Path, parent: Path) -> bool:
    try:
        path.relative_to(parent)
        return True
    except ValueError:
        return False


def collect_jobs(
    args: argparse.Namespace, output_dir: Path
) -> list[tuple[Path | str, Path | None]]:
    jobs: list[tuple[Path | str, Path | None]] = []
    seen: set[str] = set()
    output_root = output_dir.resolve()
    for raw in expand_inputs(args.inputs, args.glob):
        path = Path(raw).expanduser()
        if path.exists():
            root = path if path.is_dir() else path.parent
            for file_path in iter_files(path, args.recursive):
                resolved = file_path.resolve()
                if is_relative_to(resolved, output_root):
                    continue
                if (
                    not args.include_markdown
                    and file_path.suffix.lower() in MARKDOWN_EXTENSIONS
                ):
                    continue
                key = str(resolved)
                if key in seen:
                    continue
                seen.add(key)
                jobs.append((file_path, root if path.is_dir() else None))
        elif "://" in raw:
            if raw in seen:
                continue
            seen.add(raw)
            jobs.append((raw, None))
        else:
            print(f"Warning: input not found, skipping: {raw}", file=sys.stderr)
    return jobs


def main() -> int:
    args = parse_args()
    output_dir = Path(args.output_dir).expanduser()
    output_dir.mkdir(parents=True, exist_ok=True)
    mirror = args.mirror and not args.flat

    converter = MarkItDown(
        enable_plugins=args.use_plugins,
        docintel_endpoint=args.docintel_endpoint,
    )

    jobs = collect_jobs(args, output_dir)
    report: dict[str, object] = {"converted": [], "failed": [], "skipped": []}
    if not jobs:
        print("No input files found.", file=sys.stderr)
        return 1

    for source, root in jobs:
        target = output_path_for(source, root, output_dir, mirror)
        if target.exists() and not args.overwrite:
            report["skipped"].append({"input": str(source), "output": str(target)})
            continue

        target.parent.mkdir(parents=True, exist_ok=True)
        try:
            result = converter.convert(source, keep_data_uris=args.keep_data_uris)
            markdown = result.markdown
            if args.fail_empty and not markdown.strip():
                raise RuntimeError("MarkItDown produced empty Markdown.")
            target.write_text(markdown, encoding="utf-8")
            report["converted"].append({"input": str(source), "output": str(target)})
            print(f"Converted: {source} -> {target}")
        except Exception as exc:  # pragma: no cover - CLI behavior
            failure = {"input": str(source), "error": str(exc)}
            if os.environ.get("MARKITDOWN_BATCH_TRACEBACK"):
                failure["traceback"] = traceback.format_exc()
            report["failed"].append(failure)
            print(f"Failed: {source}: {exc}", file=sys.stderr)
            if not args.continue_on_error:
                break

    report_path = output_dir / "conversion-report.json"
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")
    return 1 if report["failed"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
