---
name: markitdown
description: Use MarkItDown to convert PDFs, Office documents, spreadsheets, images, audio, HTML, text formats, ZIPs, YouTube URLs, and batches of files into Markdown for LLM ingestion, indexing, or text analysis. Trigger when asked to use microsoft/markitdown, convert files or folders to .md, batch-convert documents to Markdown, preserve document structure as Markdown, or prepare heterogeneous documents for AI tools.
---

# MarkItDown

Use Microsoft MarkItDown for document-to-Markdown conversion when the goal is text/LLM ingestion rather than high-fidelity visual reproduction.

Authoritative source: <https://github.com/microsoft/markitdown>. If a docs/context tool such as Context7 is available, resolve `microsoft/markitdown` or use that URL before relying on stale flags.

## Install Or Verify

Prefer the active project environment. MarkItDown requires Python 3.10+.

```bash
python -m markitdown --version || markitdown --version
```

Install when missing:

```bash
python -m pip install 'markitdown[all]'
```

For minimal dependencies:

```bash
python -m pip install 'markitdown[pdf,docx,pptx,xlsx,xls,outlook]'
```

When working from a MarkItDown source checkout:

```bash
python -m pip install -e 'packages/markitdown[all]'
```

## Single File

Use the CLI first for normal file conversion:

```bash
markitdown input.pdf -o output.md
```

Equivalent stdout form:

```bash
markitdown input.docx > output.md
```

For stdin or ambiguous streams, pass hints:

```bash
cat input.bin | markitdown --extension pdf > output.md
cat input.bin | markitdown --mime-type application/pdf > output.md
```

Useful flags:

- `--use-plugins`: enable installed third-party plugins.
- `--list-plugins`: list installed plugins.
- `--keep-data-uris`: preserve data URIs instead of truncating them.
- `--use-docintel --endpoint "$AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT"`: use Azure Document Intelligence.

## Batch Files To Markdown

For multiple files, use the bundled helper:

```bash
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py ./docs --output-dir ./markdown --recursive
```

Examples:

```bash
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py file1.pdf file2.docx -o ./md
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py './invoices/**/*' -o ./md --recursive --glob
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py ./docs -o ./md --recursive --mirror
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py ./docs -o ./md --recursive --use-plugins
python ~/.agents/skills/markitdown/scripts/batch_markitdown.py ./docs -o ./md --recursive --continue-on-error
```

Default behavior:

- Writes one `.md` file per input file.
- Recurses only with `--recursive`.
- Mirrors directory structure for directory inputs unless `--flat` is passed.
- Skips existing outputs unless `--overwrite` is passed.
- Skips Markdown output files by default; use `--include-markdown` to convert `.md`/`.markdown`.
- Writes `conversion-report.json` in the output directory.

## Python API

Use the API when conversion must be embedded in another script:

```python
from markitdown import MarkItDown

md = MarkItDown(enable_plugins=False)
result = md.convert("input.xlsx")
markdown = result.markdown
```

With plugins:

```python
md = MarkItDown(enable_plugins=True)
```

With Azure Document Intelligence:

```python
md = MarkItDown(docintel_endpoint=endpoint)
```

For hosted/server-side or untrusted inputs, prefer the narrowest method that fits the source, such as `convert_local()`, `convert_stream()`, or `convert_response()`, rather than permissive `convert()`.

## Safety And Quality Checks

- Treat input paths and URLs as privileged I/O. Validate untrusted paths, URI schemes, private network access, and metadata-service access before converting.
- Verify generated Markdown is non-empty and inspect a sample of large batches.
- If output quality is poor for scans or image-heavy PDFs, try `markitdown-ocr` with plugins and an LLM vision client, or Azure Document Intelligence.
- If a format fails, install the relevant optional extra or `markitdown[all]`, then retry.
