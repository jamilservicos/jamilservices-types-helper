"use strict";

const {test} = require("node:test");
const {equal} = require("node:assert");
//
//
const testAllExports = (typeof require("./index") === "object");
const testResponseErrorExports = (typeof require("./index").responseError === "function");
const testTypesCheckExports = (typeof require("./index").typesCheck === "function");
const testTypeExceptionExports = (typeof require("./index").TypeException === "function");
const testCustomTypesExports = (typeof require("./index").customTypes === "object");
test("to main modules exports test", () => {
    equal(testAllExports, true);
    equal(testResponseErrorExports, true);
    equal(testTypesCheckExports, true);
    equal(testTypeExceptionExports, true);
    equal(testCustomTypesExports, true);
});