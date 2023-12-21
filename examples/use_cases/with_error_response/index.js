"use strict";
const {typesHelper} = require("../../..");

const examples = {
    isInteger: (data) => typesHelper({types: "integer", data}),
    isArray: (data) => typesHelper({types: "array", data}),
    isBuffer: (data) => typesHelper({types: "buffer", data}),
    isInt8: (data) => typesHelper({types: "int8", data}),
    isUInt8: (data) => typesHelper({types: "uint8", data}),
    isInt16: (data) => typesHelper({types: "int16", data}),
    isUInt16: (data) => typesHelper({types: "uint16", data}),
    isInt32: (data) => typesHelper({types: "int32", data}),
    isUInt32: (data) => typesHelper({types: "uint32", data}),
};
//
console.log("'with error response' use cases:");
console.log("\n============\n");
console.log("integer type");
console.log("success response:", examples.isInteger(1));
console.log("error response:", examples.isInteger(1.5));
//
console.log("\n============\n");
console.log("array type");
console.log("success response:", examples.isArray([1,5]));
console.log("error response:", examples.isArray(1,5));
//
console.log("\n============\n");
console.log("buffer type");
const bufferTest = Buffer.from("i'm a buffer");
console.log("success response:", examples.isBuffer(bufferTest));
console.log("error response:", examples.isBuffer(bufferTest.toJSON()));
//
console.log("\n============\n");
console.log("int8 type");
const int8Test = new Int8Array(new ArrayBuffer(8));
console.log("success response:", examples.isInt8(int8Test));
console.log("error response:", examples.isInt8(bufferTest));
//
console.log("\n============\n");
console.log("uint8 type");
const uint8Test = new Uint8Array(new ArrayBuffer(8));
console.log("success response:", examples.isUInt8(uint8Test));
console.log("error response:", examples.isUInt8(int8Test));
//
console.log("\n============\n");
console.log("int16 type");
const int16Test = new Int16Array(new ArrayBuffer(16));
console.log("success response:", examples.isInt16(int16Test));
console.log("error response:", examples.isInt16(int8Test));
//
console.log("\n============\n");
console.log("uint16 type");
const uint16Test = new Uint16Array(new ArrayBuffer(16));
console.log("success response:", examples.isUInt16(uint16Test));
console.log("error response:", examples.isUInt16(int16Test));
//
console.log("\n============\n");
console.log("int32 type");
const int32Test = new Int32Array(new ArrayBuffer(16));
console.log("success response:", examples.isInt32(int32Test));
console.log("error response:", examples.isInt32(int16Test));
//
console.log("\n============\n");
console.log("uint32 type");
const uint32Test = new Uint32Array(new ArrayBuffer(32));
console.log("success response:", examples.isUInt32(uint32Test));
console.log("error response:", examples.isUInt32(int32Test));
//
exports = module.exports = {};