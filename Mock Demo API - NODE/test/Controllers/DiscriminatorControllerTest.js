/*
 * MockDemoAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.DiscriminatorController;
const Person = testerlib.Person;

describe("DiscriminatorController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Todo Add description for test testGetPersonWithDiscriminators
     */
    it("should testGetPersonWithDiscriminators response", function testGetPersonWithDiscriminatorsTest(done) {
        controller.getPersonWithDiscriminators(function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.isTrue(TestHelper.isProperSubsetOf(context.response.body, {"personType": "Empl", "name": "SK", "age": 5147483645, "address": "H # 531, S # 20", "birthday": "1994-02-13", "salary": 20000, "department": "Software Development", "boss": {"personType": "Boss", "name": "Obi-Wan", "age": 5147483645, "address": "H # 531, S # 20", "birthday": "1994-02-13", "salary": 20000, "department": "Software Development", "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "birthday": "1994-02-13"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "birthday": "1994-02-13"}]}, "dependents": [{"name": "Future Wife", "age": 5147483649, "address": "H # 531, S # 20", "birthday": "1994-02-13"}, {"name": "Future Kid", "age": 5147483648, "address": "H # 531, S # 20", "birthday": "1994-02-13"}]}, true, false, true));
            done();
        });
    });

});
