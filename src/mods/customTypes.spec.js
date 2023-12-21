"use strict";

const {test, describe, it} = require("node:test");
const {equal} = require("node:assert");
const {customTypes} = require("./index");

const testExports = (typeof require("./customTypes") === "object");
const testInternalExports = (typeof require("./customTypes").customTypes === "object");

const int8Test = new Int8Array(new ArrayBuffer(8));
const uint8Test = new Uint8Array(new ArrayBuffer(8));
const int16Test = new Int16Array(new ArrayBuffer(16));
const uint16Test = new Uint16Array(new ArrayBuffer(16));
const int32Test = new Int32Array(new ArrayBuffer(16));
const uint32Test = new Uint32Array(new ArrayBuffer(32));

test("module typesCheck exports test", () => {
    equal(testExports, true);
    equal(testInternalExports, true);
});

describe('test custom types', () => {
    it('integer', () => {
        equal(customTypes['integer'](1), true)
    });
    it('array', () => {
        equal(customTypes['array']([]), true)
    });
    it('buffer', () => {
        equal(customTypes['buffer'](Buffer.from("i'm a buffer")), true)
    });
    it('int8', () => {
        equal(customTypes['int8'](int8Test), true)
    });
    it('uint8', () => {
        equal(customTypes['uint8'](uint8Test), true)
    });
    it('int16', () => {
        equal(customTypes['int16'](int16Test), true)
    });
    it('uint16', () => {
        equal(customTypes['uint16'](uint16Test), true)
    });
    it('int32', () => {
        equal(customTypes['int32'](int32Test), true)
    });
    it('uint32', () => {
        equal(customTypes['uint32'](uint32Test), true)
    });
});