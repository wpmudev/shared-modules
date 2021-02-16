# General Guidelines

## New Component

```
npx lerna create @wpmudev/module-foo --yes
```

## Install Packages

Shared Modules is a mono-repo managed by Lerna there are two ways to install packages:

### Global Package

When package is going to be shared between multiple components or going to be used on root.

```
# Regular dependency
yarn add -W package-name

# Development dependency
yarn add -W --dev package-name

# Peer dependency
yarn add -W --peer package-name
```

### Component Package

When package is required for an specific component.

```
# Regular dependency
lerna add package-name --scope=@wpmudev/module-foo

# Development dependency
lerna add package-name --dev --scope=@wpmudev/module-foo

# Peer dependency
lerna add package-name --peer --scope=@wpmudev/module-foo
```

## Showcase

Globally install [Yarn](https://yarnpkg.com/getting-started/install) and [Lerna](https://lerna.js.org/). Since showcase is managed by Storybook, run this in the root directory to install Storybook CLI:

```
npx sb init
```

Now you can initialize your local environment:

```
yarn run storybook
```