"use strict";

const {TypeException, responseError} = require("./typeException");
const {customTypes} = require("./customTypes");

/**
 * @function typeFilter
 * @param {Object} types
 * @returns {Set<*>}
 */
const typeFilter = (types) => {
    const custom_types = new Set(Object.keys(customTypes));
    return new Set([...types].filter(x => custom_types.has(x)));
};

/**
 * @function justOneTypeResponse
 * @param {string} key
 * @param {Object} obj
 * @returns {{error: TypeException}|boolean}
 */
const justOneTypeResponse = (key, obj) => {
    if((typeof customTypes[key] === "function") && (customTypes[key](obj.data))) return true;
    return responseError(obj);
};
/**
 * @function multiplesTypesResponse
 * @param {Object} keys
 * @param {Object} obj
 * @returns {{error: TypeException}|boolean}
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
 * @function typesCheck
 * @param {Object} obj
 * @returns {{error: TypeException}|boolean}
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
 * @private
 */
exports = module.exports = {
    ...{typesCheck}
};