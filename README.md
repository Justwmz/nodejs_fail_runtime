# Intentionally failing Node build

This repository is the evaluation fixture for the kagent GitHub resolution
workflow. `src/calculator.js` calls `lodash.subtract` where the tests require
addition, so the GitHub Actions `Build` workflow fails in a deterministic way.

Push this directory to a test GitHub repository, let the workflow fail, then
paste its Actions-run URL into `github-resolution-agent`.

The evaluation runtime will:

1. resolve and archive the exact failed commit through the trusted source broker;
2. prove that direct access to `registry.npmjs.org` is blocked;
3. install the locked dependency tree through the in-cluster Verdaccio proxy;
4. run `npm test` and `npm run build` in the isolated runner;
5. ask the local model for one bounded source change;
6. rerun both commands and open a pull request only if they pass.
