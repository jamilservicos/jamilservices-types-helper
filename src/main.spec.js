"use strict";

const mainTest = require("./main");
const {typesHelper} = mainTest;

const {describe, it} = require("node:test");
const {equal} = require("node:assert");
describe("mainTest imports", () => {
    it('import is object?', () => {
        equal((typeof mainTest === "object"), true);
    });
    it('import has the typesHelper property as a function?', () => {
        equal((typeof typesHelper === "function"), true);
    });
});
describe("typesHelper function describe", () => {
    console.log("" +
        "/**\n" +
        " * @function typesHelper\n" +
        " * @param {Array} obj - The object containing data and types for validation.\n" +
        " * @param {any} obj.data - custom data to be validated.\n" +
        " * @param {Array.<string>|string} obj.types - Array of strings or single string of types names to be validated.\n" +
        " * @param {Boolean} boolean - if active it only responds in boolean\n" +
        " * @returns {{error: TypeException}|boolean}\n" +
        " */" +
        "");
});
describe('correct types', () => {
    it('typesHelper({types: "string", data: "test"}, true)', () => {
        equal(typesHelper({types: "string", data: "test"}, true), true);
    });
    it('typesHelper({types: "number", data: 1}, true)', () => {
        equal(typesHelper({types: "number", data: 1}, true), true);
    });
    it('typesHelper({types: ["number", "string"], data: "1"}, true)', () => {
        equal(typesHelper({types: ["number", "string"], data: "1"}, true), true);
    });
    it('typesHelper({types: ["number", "string"], data: 1}, true)', () => {
        equal(typesHelper({types: ["number", "string"], data: 1}, true), true);
    });
    it('typesHelper({types: "bigint", data: 1n}, true)', () => {
        equal(typesHelper({types: ["bigint"], data: 1n}, true), true);
    });
    it('typesHelper({types: ["number", "bigint"], data: 1n}, true)', () => {
        equal(typesHelper({types: ["number", "bigint"], data: 1n}, true), true);
    });
});
describe('incorrect types', () => {
    it('typesHelper({types: "number", data: "test"}, true)', () => {
        equal(typesHelper({types: "number", data: "test"}, true), false);
    });
    it('typesHelper({types: "string", data: 1}, true)', () => {
        equal(typesHelper({types: "string", data: 1}, true), false);
    });
    it('typesHelper({types: ["number", "string"], data: {}, true)', () => {
        equal(typesHelper({types: ["number", "string"], data: {}}, true), false);
    });
    it('typesHelper({types: ["number", "string"], data: 1n, true)', () => {
        equal(typesHelper({types: ["number", "string"], data: 1n}, true), false);
    });
    it('typesHelper({types: "bigint", data: 1}, true)', () => {
        equal(typesHelper({types: ["bigint"], data: 1}, true), false);
    });
    it('typesHelper({types: ["number", "bigint"], data: "1n"}, true)', () => {
        equal(typesHelper({types: ["number", "bigint"], data: "1n"}, true), false);
    });
});
