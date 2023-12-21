"use strict";

const {typesCheck, TypeException, responseError, customTypes} = require("./mods");

/**
 * @function responseSwitch
 * @param {Object|boolean} response
 * @param {Boolean} boolean
 * @returns {{error: TypeException}|boolean}
 */
const responseSwitch = (response, boolean) => {
    if(boolean) return (typeof response === "boolean");
    return response;
};

/**
 * @function responseString
 * @param {Object} obj
 * @param {Boolean} boolean
 * @returns {{error: TypeException}|boolean}
 */
const responseString = (obj, boolean) => {
    const {data, types} = obj;
    if (typeof data === types) return true;
    if (customTypes[types]) {
        const response = customTypes[types](data);
        if(typeof response !== "undefined") return responseSwitch(response, boolean);
    }
    return responseSwitch(responseError(obj), boolean);
};

/**
 * @function typesHelper
 * @param {Array} obj - The object containing data and types for validation.
 * @param {any} obj.data - custom data to be validated.
 * @param {Array.<string>|string} obj.types - Array of strings or single string of types names to be validated.
 * @param {Boolean} boolean - if active it only responds in boolean
 * @returns {{error: TypeException}|boolean}
 */
const typesHelper = (obj, boolean = false) => {
    if (typeof obj === "object") {
        const {types} = obj;
        if (typeof types === "string") return responseString(obj, boolean);
        if (Array.isArray(types)) return responseSwitch(typesCheck(obj), boolean);
        return responseSwitch(responseError(obj), boolean);
    } else {
        return responseSwitch(responseError({
            obj,
            types: "object"
        }), boolean);
    }
};

/**
 * @private
 */
exports = module.exports = {
    ...{typesHelper}
}