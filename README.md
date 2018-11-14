# Semantic UI for Sharegate

## Installation

N/A

## Usage

N/A

## Publish

First thing first... make sure you're logged in to NPM.

If you're not, run the follow command in a terminal

```bash
npm login
```

and follow the instructions.

When it's run the following command and let the magic happen

```bash
npm version major | minor | patch
```

If you have the following error

```bash
npm ERR! Git working directory not clean.
```

Make sure you've push your changes to Git prior to running the command.

### What the magic does

The version script is based on the recipe described in the [npm-version documentation](https://docs.npmjs.com/cli/version).

The following steps will be executed in order

1. Bump the version of the package
2. Build Semantic UI
3. Delete the `publish` folder
4. Copy Semantic UI distribution files to the `publish` folder
5. Copy `package.json`, `LICENCE` and `README.md` files from the root to the `publish` folder
6. Commit + push the package changes and the tags
7. Publish the package to `NPM`

## License

Copyright © 2018, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/sharegate/semantic-ui-sg/blob/master/LICENSE.