# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This repository contains a static personal website at the repository root and a Python package called `poetry-eugene` managed with Poetry. The package follows a standard Poetry project structure with source code in `src/poetry_eugene/` and tests in `tests/`.

## Development Commands

### Initial Setup
```bash
cd poetry-eugene
poetry install  # Install dependencies and create virtual environment
poetry lock     # Create poetry.lock file if it doesn't exist
```

### Package Management
```bash
poetry add <package>        # Add a new dependency
poetry add --group dev <package>  # Add development dependency
poetry remove <package>     # Remove a dependency
poetry update              # Update all dependencies
```

### Running Code
```bash
poetry run python -m poetry_eugene  # Run the main module
poetry shell                        # Activate virtual environment
```

### Testing
```bash
poetry run pytest                   # Run all tests
poetry run pytest tests/<test_file> # Run specific test file
poetry run pytest -v               # Run tests with verbose output
```

### Building and Publishing
```bash
poetry build     # Build the package (creates dist/ directory)
poetry publish   # Publish to PyPI (requires authentication)
```

## Project Structure

```
./
├── index.html              # Static personal site
├── style.css               # Site styling
├── script.js               # Site interactions
└── poetry-eugene/
    ├── pyproject.toml      # Project configuration and dependencies
    ├── README.md           # Package documentation
    ├── src/
    │   └── poetry_eugene/  # Main package source code
    │       ├── __init__.py
    │       └── __main__.py
    └── tests/              # Test files
        ├── __init__.py
        └── test_package.py
```

## Architecture Notes

- This repository is split between a static website and a minimal Poetry project
- Package source code is located in `src/poetry_eugene/` following the src-layout convention
- Tests are organized in the `tests/` directory
- The project uses Poetry's build backend (`poetry.core.masonry.api`)
- Python 3.12+ is required as specified in pyproject.toml

## Development Workflow

1. Use `poetry install` to set up the development environment
2. Add dependencies via `poetry add` rather than editing pyproject.toml manually
3. Run tests with `poetry run pytest` before committing changes
4. Use `poetry build` to create distributable packages
