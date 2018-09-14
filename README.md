# Automated Test Generation and Code Quality Checking 👩‍💻 
I implemented automatic test generation along with the addition of code styling checks in the Code Generation engine, for JavaScript SDKs, while I was working as a Software Engineer at [APIMatic](https://apimatic.io). Read on to find out more about the story behind the need for these features, how they were implemented and how they helped the team achieve certain objectives.

## The need for automated tests and code quality checks
APIMatic's Code Generation Engine makes it easy to consume REST APIs by automatically generating code for consuming these APIs in the form of client libraries/SDKs. However, code cannot be pushed to production without thorough testing.
Now one option was that developers could generate automatic SDKs and write tests for it themselves. However, this was a cumbersome task and could potentially be automated. **This was the vision** behind adding the capability of generating automated unit tests with client libraries in the Code Generation Engine. Furthermore, to ensure consistency of generated code, it was necessary to add code quality and style checking to the generated SDKs.

## How this helped us achieve multiple objectives
The addition of automated tests along with code quality checks helped us achieve 2 main objectives.
* The first one was to provide ease of use to developers generating SDKs from the Code Generation Engine. Providing automatic unit tests meant the developers could focus on their own application's business logic instead of worrying about the validity of generated code. Similarly, addition of code quality checks ensured the developers that the generated code conforms to industry standards.

* The other objective was internal testing of the CodeGen engine. Automated tests along with code quality checks helped ensure that our SDKs were of top quality. We built a CI/CD pipeline for this purpose so that whenever changes were made to the CodeGen engine, the validity and quality of code produced could be checked.

You can [read more about this here](https://blog.apimatic.io/introducing-code-standard-compliant-sdks-ee05f5c59ed4)
 
## Implementing automated tests for Node.js SDKs
Making a generic implementation for the automatic generation of tests was very important to support all types of REST APIs. Therefore, careful planning was required.
I used [`mocha`](https://mochajs.org/) as the testing framework along with [`chai`](http://www.chaijs.com/) for test assertions and created a `TestHelper` file which contained some helper functions for parsing and checking API responses. Functions were written for checking:
* Request headers
* Array responses
* Object responses
* Nested response objects (checking keys and values of nested objects)
* Other utility functions

### How this was implemented in the CodeGen Engine
If we consider generated test files as the **'View'**, an MVC approach was taken for implementing automated test generation. A generic template was written, along with checks for some specific cases. A controller was responsible for retrieving data about the API from the API description and binding the appropriate data with the template to create an automated test file.
2 different kinds of templates were written. One was for the basic structure of the test file. While the other one was for generating an executable test. So, the test file would contain all the executable tests defined in the API description.

## Implementing code style compliance in JavaScript SDKs
The [`Airbnb JavaScript Style Guide`](https://github.com/airbnb/javascript) was followed and implemented in Node.js SDKs while [`John Papa’s Angular 1 Style Guide`](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) was used for AngularJS SDKs. Again, templates were used for generation of code. And conformance for the rules set out in the style guides had to be manually added and ensured in all the templates used for generating code. The generated SDKs come with some dev-dependencies (eslint and some related packages) specified in the `package.json` file for running linting on all the files. Some of the rules from the style guides were also modified as required. 
You can also read more about this [here](https://blog.apimatic.io/introducing-code-standard-compliant-sdks-ee05f5c59ed4)

## Demo
To see a demo, clone this repo and then:

* Run `npm install` in the terminal to install project dependencies
* Run `npm test` in the terminal to run all the automated tests
* Run `npm run lint` in the terminal to lint all the generated code

Please let me know if you have any questions regarding this 😄
