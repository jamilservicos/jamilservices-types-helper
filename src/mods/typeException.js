"use strict";

/**
 * Custom error class for handling type exceptions.
 *
 * This class extends the built-in Error class and provides a customized message
 * for type-related errors, indicating what type was expected and what was received.
 *
 * @class TypeException
 * @extends {Error}
 */
class TypeException extends Error {
    /**
     * Creates an instance of TypeException.
     *
     * @constructor
     * @param {any} data - The data that caused the exception due to a type mismatch.
     * @param {string|string[]} type - The expected type(s) that the data was supposed to adhere to.
     */
    constructor(data, type) {
        const code = "TypeError";
        let message = `Argument type ${typeof data} is not assignable to parameter type ${type}`;
        if(Array.isArray(type)) message = `Argument type ${typeof data} is not assignable to parameter types: ${type.join(", ")}`;
        const response = (data && type) ? `${code}: ${message}` : code;
        super(response);
        this.name = this.code = code;
        this.message = response;
    }
    /**
     * Converts the error object to its string representation.
     *
     * @returns {string} - The string representation of the error.
     */
    toString() {
        return this.message;
    }
}

/**
 * Generates a TypeException error object for a given data and expected type(s).
 *
 * This function is a helper to create a standardized error object when there is a type mismatch.
 *
 * @function responseError
 * @param {Object} obj - The object containing the data and the expected type(s).
 * @param {any} obj.data - The data that caused the type exception.
 * @param {string|string[]} obj.types - The expected type(s) that the data was supposed to adhere to.
 * @returns {{error: TypeException}} - An object containing the TypeException error.
 */
const responseError = (obj) => {
    const {data, types} = obj;
    return {error: new TypeException(data, types)};
};

/**
 * Exports the TypeException class and responseError function.
 * These are primarily used for handling and reporting type-related errors.
 *
 * @private
 */
exports = module.exports = {
    ...{TypeException},
    ...{responseError}
};