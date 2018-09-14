# Getting Started with Mock Demo API

A Mock API created for a demo of features implemented in automatically generated Node.js SDK.


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).

The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)

> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`

* `npm --version`

![Version Check](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=versionCheck)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=resolveDependency1)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `lib` in to your `node_modules` folder.

## How to Use

The following section explains how to use the generated library in a new project.

### 1. Open Project Folder

Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=openProject)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js`.

![Create new file](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=createNewFile)

Now import the generated NodeJS library using the following lines of code:

```
const lib = require('lib');
```

Save changes.

Your `index.js` file should look like this now

![Save new file](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=saveNewFile)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?workspaceFolder=MockDemoAPI&step=runProject)

## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run. Tests can be run in a number of ways:

### Method 1 - Run all tests

1. Navigate to the root directory of the SDK folder from command prompt. `(PathToSDK/MockDemoAPI/)`

2. Type `mocha --recursive` or `npm test` to run all the tests.

### Method 2 - Run all tests

1. Navigate to the `PathToSDK/MockDemoAPI/test/Controllers/` directory from command prompt.

2. Type `mocha *` to run all the tests.

### Method 3 - Run specific controller's tests

1. Navigate to the `PathToSDK/MockDemoAPI/test/Controllers/` directory from command prompt.

2. Type `mocha MockDemoAPIController` to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?controllername=MockDemoAPIController&workspacefolder=MockDemoAPI&step=runTests)

## Initializing

The API client can be initialized as following.

```js
const lib = require('lib');
const configuration = lib.Configuration;

```


## Authorizing your client

This API does not require authentication.


## API Reference

### List of APIs

* [DiscriminatorController](#discriminatorcontroller)
* [PersonController](#personcontroller)
* [EmojiController](#emojicontroller)

### `DiscriminatorController`

#### Overview

##### Get singleton instance

The singleton instance of the `DiscriminatorController` class can be accessed from the API Client.

```
const lib = require('lib');
const controller = lib.DiscriminatorController;
```

#### `getPersonWithDiscriminators`

```js
getPersonWithDiscriminators()
```

##### Response Type

[`Person`](#person)

##### Example Usage

```js
const promise = controller.getPersonWithDiscriminators();
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'Person'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

### `PersonController`

#### Overview

##### Get singleton instance

The singleton instance of the `PersonController` class can be accessed from the API Client.

```
const lib = require('lib');
const controller = lib.PersonController;
```

#### `getPerson`

```js
getPerson()
```

##### Response Type

[`Person`](#person)

##### Example Usage

```js
const promise = controller.getPerson();
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'Person'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

### `EmojiController`

#### Overview

##### Get singleton instance

The singleton instance of the `EmojiController` class can be accessed from the API Client.

```
const lib = require('lib');
const controller = lib.EmojiController;
```

#### `getEmoji`

```js
getEmoji()
```

##### Response Type

[`EmojiResponse`](#emojiresponse)

##### Example Usage

```js
const promise = controller.getEmoji();
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'EmojiResponse'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

## Model Reference

### Structures

* [`Employee`](#employee)
* [`Boss`](#boss)
* [`Person`](#person)
* [`EmojiResponse`](#emojiresponse)

#### `Employee`

##### Inherits From

[`Person`](#person)

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `department` | `string` |  | - |
| `dependents` | [`array`](#person) |  | - |
| `salary` | `int` |  | - |
| `boss` | [`Person`](#person) | Optional | - |

##### Example (as JSON)

```json
{
  "department": "department0",
  "dependents": [
    {
      "address": "address3",
      "age": 45,
      "birthday": "2016-03-13",
      "name": "name7",
      "personType": null
    },
    {
      "address": "address4",
      "age": 46,
      "birthday": "2016-03-13",
      "name": "name8",
      "personType": null
    },
    {
      "address": "address5",
      "age": 47,
      "birthday": "2016-03-13",
      "name": "name9",
      "personType": null
    }
  ],
  "salary": 176,
  "boss": null,
  "address": "address6",
  "age": 250,
  "birthday": "2016-03-13",
  "name": "name0",
  "personType": null
}
```

#### `Boss`

Testing circular reference.

##### Inherits From

[`Employee`](#employee)

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `promotedAt` | `dateTime` |  | - |
| `assistant` | [`Employee`](#employee) | Optional | - |

##### Example (as JSON)

```json
{
  "promotedAt": 1480809600,
  "assistant": null,
  "department": "department0",
  "dependents": [
    {
      "address": "address3",
      "age": 45,
      "birthday": "2016-03-13",
      "name": "name7",
      "personType": null
    },
    {
      "address": "address4",
      "age": 46,
      "birthday": "2016-03-13",
      "name": "name8",
      "personType": null
    },
    {
      "address": "address5",
      "age": 47,
      "birthday": "2016-03-13",
      "name": "name9",
      "personType": null
    }
  ],
  "salary": 176,
  "boss": null,
  "address": "address6",
  "age": 250,
  "birthday": "2016-03-13",
  "name": "name0",
  "personType": null
}
```

#### `Person`

##### Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` |  | - |
| `age` | `long` |  | - |
| `birthday` | `date` |  | - |
| `name` | `string` |  | - |
| `personType` | `string` | Optional | - |

##### Example (as JSON)

```json
{
  "address": "address6",
  "age": 250,
  "birthday": "2016-03-13",
  "name": "name0",
  "personType": null
}
```

#### `EmojiResponse`

JSON Response for Emojis

##### Fields

| Name | Type | Description |
|  --- | --- | --- |
| `msg` | `string` | - |

##### Example (as JSON)

```json
{
  "msg": "msg6"
}
```