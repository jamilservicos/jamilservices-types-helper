"use strict";

const {test} = require("node:test");
const {equal} = require("node:assert");

const testExports = (typeof require("./typeException") === "object");
const testInternalExports = (typeof require("./typeException").TypeException === "function");
test("module typeException exports test", () => {
    equal(testExports, true);
    equal(testInternalExports, true);
});