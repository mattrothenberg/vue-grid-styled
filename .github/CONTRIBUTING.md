# Contributing

## Usage

```bash
# Install dependencies
npm install

# Build
npm run build

# Run development server with storybook
npm run storybook

# Run linter
npm run lint

# Run linter with auto fix
npm run lint:fix

# Commit files with commitizen (use this instead of git commit)
npm run cz
```

## Workflow

* Create a component in the src/components folder
* Add tests in the src/components/\_\_tests\_\_ folder
* Register this component in src/index.js
* Write stories which use your component as a template in src/stories/index.stories.js
* Run `npm run storybook` to author your components by having a development environment
* Run lint and tests before commiting anything
* Commit using [Commit Convention](.github/COMMIT_CONVENTION.md) and push to github
* If deployment is setup correctly(see next section), your components will be available on npm and release on github :)

If everything is setup properly, every commit on master will automatically generate a release if needed. For the win.
