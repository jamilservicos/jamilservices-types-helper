"use strict";

const {test} = require("node:test");
const {equal} = require("node:assert");

const testExports = (typeof require("./typesCheck") === "object");
const testInternalExports = (typeof require("./typesCheck").typesCheck === "function");
test("module typesCheck exports test", () => {
    equal(testExports, true);
    equal(testInternalExports, true);
});