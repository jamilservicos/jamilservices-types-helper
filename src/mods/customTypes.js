"use strict";

const {
    isInt8Array,
    isUint8Array,
    isInt16Array,
    isUint16Array,
    isInt32Array,
    isUint32Array
} = require("node:util/types")

const response = (fn) => {
    if (fn) return true;
    return undefined;
};

const customTypes = {
    integer: (x) => response(Number.isInteger(x)),
    array: (x) => response(Array.isArray(x)),
    buffer: (x) => response(Buffer.isBuffer(x)),
    int8: (x) => response(isInt8Array(x)),
    uint8: (x) => response(isUint8Array(x)),
    int16: (x) => response(isInt16Array(x)),
    uint16: (x) => response(isUint16Array(x)),
    int32: (x) => response(isInt32Array(x)),
    uint32: (x) => response(isUint32Array(x)),
};

exports = module.exports = {
    ...{customTypes}
}