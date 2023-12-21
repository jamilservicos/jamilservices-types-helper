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
 * @function typesHelper
 * @param {Array} obj - The object containing data and types for validation.
 * @param {any} obj.data - custom data to be validated.
 * @param {Array.<string>|string} obj.types - Array of strings or single string of types names to be validated.
 * @param {Boolean} boolean - if active it only responds in boolean
 * @returns {{error: TypeException}|boolean}
 */
const typesHelper = (obj, boolean = false) => {
    let response = responseError({
        data: obj,
        type: "object"
    });
    if (typeof obj === "object") {
        const {data, types} = obj;
        if ((typeof types === "object") && (Array.isArray(types))) return responseSwitch(typesCheck(obj), boolean);
        if (typeof types === "string") {
            if (typeof data === types) return true;
            if (customTypes[types]) return responseSwitch(customTypes[types](data), boolean);
        }
        return responseSwitch(obj, boolean);
    }
    return responseSwitch(response, boolean);
};

/**
 * @private
 */
exports = module.exports = {
    ...{typesHelper}
}