# Contributing to Visual Stack

Thank you for considering a contribution to Visual Stack. All forms of contribution are welcome, from issue reports to PRs and documentation / write-ups.

## Getting Started

### Packages

This repo consists of three packages managed by [lerna](https://lerna.js.org):

#### visual-stack (VS)

These are the visual components. Generally, they should be stateless and, where appropriate, provide an API that works well with controlling, stateful components.

#### visual-stack-redux (VSR)

For components from visual-stack that require state management, this library provides redux-based wrappers. This package depends on `visual-stack`.

#### visual-stack-docs (VSD)

This is a microsite providing documentation and live examples of components. This package depends on the other two.

### Running locally
Install lerna: `npm install -g lerna`

Make sure you are using node 14 or below (`npm install -g n` can be helpful here)

From a fresh clone of the repo, start by bootstrapping the project from the root with `npm run bootstrap`. This will install all external dependencies, create links between local dependent packages and build all three packages.

To run a dev instance of VSD:
```
cd packages/visual-stack-docs
npm run docs
```

This works well in conjunction with `npm run watch` in both the VS and VSR packages to setup hot reloading while developing, integrating, and documenting components.

To run these with a single command, from the root directory run `npm run start-all`

## How to contribute to Visual Stack?

- All new work should be [submitted via pull requests (PR)](#submitting-a-pull-request).
- PR's should be reviewed by other chapter members.
- All behavioral changes should have test coverage.
- PR's should include an update to the CHANGELOG.md before they are merged in under a new heading at the top 'next version'
- Visual PR's should have UX team approval.
- Updates or additional components should be documented in [visual-stack-docs](http://cjurl.me/visual-stack-docs).
- There is proper error handling around a component (Error Boundaries, PropTypes, etc).

## How to approve a PR for Visual Stack?

- Are there tests where there should be?
- Is the docs site updated to display changes made to code? E.g. prop updates, function changes, additional components added
- Are there any regressions in visual document component?
- Are there appropriate Error Boundaries around the component?
- npm run lint (at least on the changed files)

## Standards for Components in Visual Stack

Pure stateless components are preferred when possible.

### Props

- Should have a className prop and pass it down to its underlying element or component.
- Always prefer object spread for extra props, {...restProps}.

Example:
```javascript
const MyComponent = ({ className, children, ...restProps }) =>
  <div className={classNames('vs-my-component', className)} {...restProps}>{children}</div>;
```

### CSS
- `z-index` should be done in multiples of 10 so other applications can properly layer things.
- Root element of a component should have a className that identifies the components that it's on.
- The className should have a `vs-` prefix, e.g., `vs-box` or `vs-date-picker`.

## Preferred File Structure

New components should be in a directory named after the component.

Read more about this in the [standards](http://gitlab.cj.dev/cjdev/front-end-chapter/tree/master/standards#organization).

## What are correct tests for Visual Stack?

If new behavior is added, it should be tested. CSS changes are usually not considered behavior.

Behavior usually can be tested either by:

- Simulating an event and verifying state is properly updated in props, state, redux, etc.
- Rendering a component and checking another component's props to check that it is passing down state and prop changes correctly.

As of right now, we don't do CSS visual testing.
Exceptions could be made for media queries or responsive layouts.
Checking to see if a CSS class is applied is enough.

## How do we handle visual regression testing?

Currently, different areas symlink between the branch and their own and visually check that nothing breaks.

There are no efforts to introduce visual regression testing at the moment.

## Submitting a pull request

- Create and push a new branch with the changes.
- Create a new pull request (PR) in the github repo based on the branch. You'll be taken to a page for the new PR.
- Travis CI should pick up the change and start building and running tests. This can take a few minutes. You should see ongoing progress in the PR page.
- Once Travis CI finishes building, there's a green passing build.
- Ask a maintainer to review your changes.
- Once the changes are reviewed and there are no more changes to make, ask a maintainer to merge the PR to master.

## Publishing a new release

- Decide what the new version number is going to be. Visual Stack follows [SemVer](https://semver.org) with a few adjustments:
    - MAJOR version upgrades when you make breaking changes. Look out for CSS changes, they can often be breaking.
    - MINOR version upgrades when you add new components or new major functionality in a backwards compatible manner.
    - PATCH version upgrades when you make bug fixes or add minor feature enhancements in a backwards compatible manner.
- Make sure CHANGELOG.md is updated with the new version number and notes of all changes to be included in the release.
- Commit and push any changes to CHANGELOG.md to master.
- If you don't have one, create an account on npmjs.com.
    - Get one of the front-end leads to add that npmjs account to the cjdev organization.
    - Run `$ npm adduser`
- Make sure that visual-stack-redux/package.json has the correct major version of visual-stack as a peerDependency reference.
- Run `npm run lerna publish`. You'll be prompted to select the new version number. It will update version numbers in all packages, create a release in GitHub, and push to npm.

### Publishing failed but a new release was still created in GitHub. What should I do?

This probably means that publishing to npm failed. Try publishing it from your local git repo running `npm run lerna publish from-git`.
