# osminkin.github.io

Personal site and small Python package playground for Eugene Osminkin.

## Site

The root of this repository is a static website that can be opened directly in a browser:

```bash
open index.html
```

The site currently uses plain HTML, CSS, and JavaScript:

- `index.html` contains the page structure.
- `style.css` contains the retro visual styling.
- `script.js` contains navigation, animations, and guestbook interactions.

## Python Package

The `poetry-eugene/` directory contains a minimal Poetry-managed Python package.

```bash
cd poetry-eugene
poetry install
poetry run python -m poetry_eugene
poetry run pytest
```

The package source uses the standard `src/` layout, with tests in `poetry-eugene/tests/`.
