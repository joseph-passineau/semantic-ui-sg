# Semantic UI for Sharegate

## Installation

N/A

## Usage

N/A

## Publish

First thing first... make sure you are logged in to NPM.

If you're not, run the follow command in a terminal

```bash
npm login
```

and follow the instructions.

When it's run the following command and let the magic happen

```bash
npm version major | minor | patch
```

If you have the following errors

```bash
npm ERR! Git working directory not clean.
```

Make sure you've push your changes to Git prior to running the command.

### What the magic does

It's based on recipe described in the [npm-version documentation](https://docs.npmjs.com/cli/version).

It will execute the following in order

1. Bump the version of the package
2. Build Semantic UI
3. Copy Semantic UI distribution file to the `publish` folder
4. Copy `package.json`, `LICENCE` and `README.md` files from the root to the `publish` folder
5. Commit + push the package changes and the tags
6. Publish the packages to `NPM`
7. Delete the `publish` folder

## License

Copyright © 2018, Groupe Sharegate inc. This code is licensed under the Apache License, Version 2.0. You may obtain a copy of this license at https://github.com/sharegate/semantic-ui-sg/blob/master/LICENSE.