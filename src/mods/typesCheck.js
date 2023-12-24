"use strict";

const {TypeException, responseError} = require("./typeException");
const {customTypes} = require("./customTypes");

/**
 * Filters the given types to include only those that are defined in the customTypes.
 *
 * @private
 * @function typeFilter
 * @memberof module:TypesCheckModule
 * @param {Object} types - The types to be filtered.
 * @returns {Set<*>} - A Set of types that are both in the input and the customTypes.
 */
const typeFilter = (types) => {
    const custom_types = new Set(Object.keys(customTypes));
    return new Set([...types].filter(x => custom_types.has(x)));
};

/**
 * Evaluates if the provided data in obj matches the specified type key.
 *
 * @private
 * @function justOneTypeResponse
 * @memberof module:TypesCheckModule
 * @param {string} key - The key representing the type in customTypes to check against.
 * @param {Object} obj - The object containing the data to be checked.
 * @returns {{error: TypeException}|boolean} - Returns true if data matches the type, otherwise returns an error object.
 */
const justOneTypeResponse = (key, obj) => {
    if((typeof customTypes[key] === "function") && (customTypes[key](obj.data))) return true;
    return responseError(obj);
};

/**
 * Evaluates if the provided data in obj matches any of the specified multiple type keys.
 *
 * @private
 * @function multiplesTypesResponse
 * @memberof module:TypesCheckModule
 * @param {Object} keys - The keys representing the types in customTypes to check against.
 * @param {Object} obj - The object containing the data to be checked.
 * @returns {{error: TypeException}|boolean} - Returns true if data matches any of the types, otherwise returns an error object.
 */
const multiplesTypesResponse = (keys, obj) => {
    const {data} = obj;
    for (let i = (keys.length - 1); i >= 0; i--) {
        const key = keys[i];
        if ((key) && (typeof customTypes[key] === "function") && (customTypes[key](data))) return true;
        if (i === 0) return responseError(obj);
    }
};

/**
 * Checks if the provided data matches any of the specified types.
 *
 * This function determines if the provided data in obj matches the specified type(s) in customTypes or JavaScript primitive types.
 * It can handle both single and multiple type checks.
 *
 * @function typesCheck
 * @memberof module:TypesCheckModule
 * @param {Object} obj - The object containing the data and the types to be checked.
 * @param {any} obj.data - The data to be evaluated against the specified types.
 * @param {Array.<string>|string} obj.types - The types to check the data against.
 * @returns {{error: TypeException}|boolean} - Returns true if data matches any of the types, otherwise returns an error object.
 */
const typesCheck = (obj) => {
    const {data, types} = obj;
    try {
        const t = new Set(types);
        if (t.has(typeof data)) return true;

        let s = typeFilter(types);
        if (1 > s.size) return responseError(obj);

        const keys = [...s];
        if (s.size === 1) return justOneTypeResponse(keys[0], obj);
        return multiplesTypesResponse(keys, obj);
    } catch {
        return responseError(obj);
    }
};

/**
 * Exports the typesCheck function.
 * This function is intended for internal use within the module or package.
 *
 * @private
 * @module TypesCheckModule
 */
exports = module.exports = {
    ...{typesCheck}
};