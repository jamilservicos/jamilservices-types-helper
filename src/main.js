"use strict";

const {typesCheck, TypeException, responseError, customTypes} = require("./mods");

/**
 * Switches the response based on the specified condition.
 *
 * This function checks the type of the provided response and the boolean condition.
 * If the condition is true, it returns whether the response is of type boolean. Otherwise,
 * it returns the response as is. If the response is an error or exception type, it might return an object
 * with an error key.
 *
 * @private
 * @function responseSwitch
 * @memberof module:TypesHelperModule
 * @param {Object|boolean} response - The response to check, can be an object or a boolean.
 * @param {Boolean} boolean - The condition to determine the type of operation.
 * @returns {{error: TypeException}|boolean} - Returns true or false if the condition is true and the response is a boolean;
 *                                            otherwise, returns the response itself, which could be an error object.
 */
const responseSwitch = (response, boolean) => {
    if(boolean) return (typeof response === "boolean");
    return response;
};


/**
 * Evaluates the data against specified types and returns a boolean or an error.
 *
 * This function checks if the provided data matches the specified types. If it does, it returns true.
 * If not, it checks if a custom type handler is defined for the type and uses that for evaluation.
 * If no conditions are met, it generates and returns an error response.
 *
 * @private
 * @function responseString
 * @memberof module:TypesHelperModule
 * @param {Object} obj - The object containing the data and types to be checked.
 * @param {any} obj.data - The data to be evaluated against the specified types.
 * @param {string} obj.types - The type or custom type name to check the data against.
 * @param {Boolean} boolean - Determines how the response should be processed.
 * @returns {{error: TypeException}|boolean} - Returns true if the data matches the types,
 *                                             a boolean result from responseSwitch if a custom type is used,
 *                                             or an error object if the evaluation fails.
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
 * A helper function for validating custom data against specified types.
 *
 * This function determines the type of validation to perform based on the structure of the `types` parameter.
 * If `types` is a string, it calls `responseString` for single type validation. If `types` is an array,
 * it calls `typesCheck` for multiple types validation. If neither condition is met, or if the input object is invalid,
 * it generates and returns an error response.
 *
 * @function typesHelper
 * @memberof module:TypesHelperModule
 * @param {Object} obj - The object containing data and types for validation.
 * @param {any} obj.data - Custom data to be validated.
 * @param {Array.<string>|string} obj.types - Array of strings or a single string of type names to be validated.
 * @param {Boolean} boolean - If true, the function only responds with boolean values.
 * @returns {{error: TypeException}|boolean} - Returns true if the data matches the types,
 *                                             a boolean result from the respective response function if types are used,
 *                                             or an error object if the evaluation fails.
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
 * Exports the typesHelper function.
 *
 * This module provides access to the typesHelper function, which is used for validating custom data against specified types.
 * The export is marked as private, indicating it's intended for internal use within the module or package.
 *
 * @private
 * @module TypesHelperModule
 */
exports = module.exports = {
    ...{typesHelper}
}