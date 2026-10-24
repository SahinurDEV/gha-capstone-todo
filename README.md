# gha-capstone-todo
Capstone project for "GitHub Actions CI/CD for Beginners": a tiny to-do app with a full pipeline.
- CI: lint, test (Node 22 + 24 matrix, npm cache), build - on every PR and push to main
- CD: GitHub Pages deploy (main only, github-pages environment) and a Docker image on GHCR tagged with the commit SHA
- Release: tag v*.*.* -> GitHub release with generated notes and a versioned image
Run locally: `npm test && npm run build && npm start` then open http://localhost:8080
