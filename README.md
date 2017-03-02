dotenv-vars-helper
===
[![Build Status](https://travis-ci.org/slowmove/dotenv-vars-helper.svg?branch=master)](https://travis-ci.org/slowmove/dotenv-vars-helper)


When using environment variables, either in Heroku or thru a local `.env` file (use for example my package [dotenv-vars](https://www.npmjs.com/package/dotenv-vars) to read them as process environment variables) all variables are set as strings. This is not optimal when you want to use them as toggles (booleans) or to hold some kind of integer value. This package help you out resolving this.

## Installation

``` npm install --save dotenv-vars-helper```

## Usage

This package is exposing three methods

- `isSet("key")` which should be used for toggles and will give you a boolean, `true | false` where any other string than `true` will give you `false`

- `enabled("key")` gives you a boolean as well, but any string but "false" and bool false gives you `true`.

- `correctedType(key)` which give you the value in the "correct" type, i.e. bool if it has a string value that is "true" or "false", number if it has a string value that really is a number etc.

Having your environment variables set in `process.env` via for example the package mentioned above, you can use this package as below

```javascript
const envHelper = require("dotenv-vars-helper");

const isFeatureEnabled = envHelper.isSet("ENABLE_FEATURE_X");
```
