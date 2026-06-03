"""Command-line entrypoint for poetry_eugene."""

from poetry_eugene import greeting


def main() -> None:
    print(greeting())


if __name__ == "__main__":
    main()
