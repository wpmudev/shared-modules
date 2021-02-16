# How to Contribute

If you are looking for a bug to fix, check out [Help Wanted Issues](https://github.com/wpmudev/shared-modules/issues) on GitHub. Otherwise please open a new issue.

## Working on Issues.

Shared Modules goal is to provide WPMU DEV developers components used globally (on all plugins). If there is part of the implementation you disagree with please open a [new issue](https://github.com/wpmudev/shared-modules/issues/new).

### New Feature.

We consider any new API to be a new feature. An API is any of the following:

- Adding a new component
- Adding new features to components

> If you'd like to add a new component please open an [issue](https://github.com/wpmudev/shared-modules/issues/new).

### Improve Feature.

We consider any new API to be a new feature. An API is any of the following:

- Update to React Component APIs
- Prop updates on React Component

> If changes fall under these categories please open an [issue](https://github.com/wpmudev/shared-modules/issues/improvement).

### Fixing Bugs.

Go ahead an open a pull request when:

- The issue is a small doc change (READMEs, documentation, etc.).
- The changes you want to perform are under 10 - 20 lines of code.

> Have in mind that anything larger to 20 lines of code or changes to an API will require an issue to be opened first.

## Pull Request Message Format

The final pull request message to the @wpmudev/module-foo package, for GitHub issue 1234, should look like this:

```
# For a new feature
✨ new/foo: Short description of feature

# For improvements
🎨 enhance/foo: Short description of improvement

# For accessibility changes
♿️ aria/foo: Short description of feature

# For a fix to an issue
🐛 fix/foo: Short description of fix

# For a doc update
📝 docs/foo: Short description of doc changes
```

This message is pulled into our `CHANGELOG` when we release and is based on Angular's git commit guidelines.

## Pull Requests.

Pull requests should meet the following criteria:

- **PRs should be focused!** PRs should focus on fixing one issue or an additional feature. Anything extra requires another PR.
- If there is an existing [issue](https://github.com/wpmudev/shared-modules/issues/) please refer to it in the description of your PR.
- Please also add notes/description about what your changes are trying to achieve (or anything you've learned). Brevity appreciated.

### Process

Before opening a PR, it should be up to date with targeted release (`rc<release_number>` ie. `rc0.7.0`, `rc0.8.0`, etc.). In most cases it will never be branched from `master`.

#### Checklist:

- [ ] Lint passes.
- [ ] Chromatic passes.
- [ ] Descriptions about your changes.

Once you have passed all checks, the process is as follows:

1. Ping one of the admins ([@iamleigh](https://github.com/iamleigh), [@a-danae](https://github.com/a-danae)) in the PR when its ready for review.
2. We will either approve, request changes, or explain why we can't accept these changes. And we'll work from there.
3. Assuming approval, one of the admins will merge your changes and remove the branch from the PR.