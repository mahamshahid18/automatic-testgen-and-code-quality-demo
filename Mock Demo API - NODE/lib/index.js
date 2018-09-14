/**
  * @module MockDemoAPILib
  *
  * A Mock API created for a demo of features implemented in automatically generated Node.js SDK.
  */

'use strict';

const Configuration = require('./configuration');
const Logger = require('./LogConfig');
const DiscriminatorController = require('./Controllers/DiscriminatorController');
const PersonController = require('./Controllers/PersonController');
const EmojiController = require('./Controllers/EmojiController');
const Employee = require('./Models/Employee');
const Boss = require('./Models/Boss');
const Person = require('./Models/Person');
const EmojiResponse = require('./Models/EmojiResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MockDemoAPILib
    Configuration,
    Logger,
    // controllers of MockDemoAPILib
    DiscriminatorController,
    PersonController,
    EmojiController,
    // models of MockDemoAPILib
    Employee,
    Boss,
    Person,
    EmojiResponse,
    // exceptions of MockDemoAPILib
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
