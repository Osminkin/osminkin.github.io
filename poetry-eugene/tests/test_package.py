from poetry_eugene import __version__, greeting


def test_version() -> None:
    assert __version__ == "0.1.0"


def test_greeting() -> None:
    assert greeting() == "Hello, Eugene!"
    assert greeting("Codex") == "Hello, Codex!"
