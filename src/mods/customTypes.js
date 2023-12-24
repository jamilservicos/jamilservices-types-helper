"use strict";

const {
    isInt8Array,
    isUint8Array,
    isInt16Array,
    isUint16Array,
    isInt32Array,
    isUint32Array
} = require("node:util/types")

/**
 * A simple function to return true if the function argument is truthy, otherwise undefined.
 * To defaults any success response to type "boolean", and failure response to type "undefined"
 *
 * @private
 * @function response
 * @memberof module:CustomTypesModule
 * @param {any} fn - defaults any success response to boolean,
 * @returns {boolean|undefined} - Returns true if the function argument is truthy, otherwise undefined.
 */
const response = (fn) => {
    if (fn) return true;
    return undefined;
};

/**
 * An object containing functions to validate different types of data.
 * Each property is a function that takes a value and returns true if the value is of the specified type,
 * otherwise undefined.
 *
 * @typedef {Object} CustomTypes
 * @memberof module:CustomTypesModule
 * @property {function(any):boolean|undefined} integer - Checks if the value is an integer.
 * @property {function(any):boolean|undefined} array - Checks if the value is an array.
 * @property {function(any):boolean|undefined} buffer - Checks if the value is a buffer.
 * @property {function(any):boolean|undefined} int8 - Checks if the value is an Int8Array.
 * @property {function(any):boolean|undefined} uint8 - Checks if the value is a Uint8Array.
 * @property {function(any):boolean|undefined} int16 - Checks if the value is an Int16Array.
 * @property {function(any):boolean|undefined} uint16 - Checks if the value is a Uint16Array.
 * @property {function(any):boolean|undefined} int32 - Checks if the value is an Int32Array.
 * @property {function(any):boolean|undefined} uint32 - Checks if the value is a Uint32Array.
 */
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

/**
 * Exports the customTypes object.
 * This object is intended for use in type validation throughout the module or package.
 *
 * @private
 * @module CustomTypesModule
 */
exports = module.exports = {
    ...{customTypes}
}