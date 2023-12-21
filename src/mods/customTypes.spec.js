"use strict";

const {test} = require("node:test");
const {equal} = require("node:assert");

const testExports = (typeof require("./customTypes") === "object");
const testInternalExports = (typeof require("./customTypes").customTypes === "object");
test("module typesCheck exports test", () => {
    equal(testExports, true);
    equal(testInternalExports, true);
});