# Bring CLI

- A simple CLI tool that allows you bring public repositories (project templates) and loosely coupled component for your existing projects.

- The standalone version of `Bring CLI` only covers public code bases.

## Technical Details

- For now, repositories are hosted in Github (not ready yet for being public) but it will be considered an alternative that does not include third-party servers.
  - Goal: Avoid download all code base, only download required repository or components.
- Components are stored in base64, as well as repositories, it'll be considered a better solution to store code bases including their format 
  - Goal: Better performance.