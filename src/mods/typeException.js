"use strict";

class TypeException extends Error {
    constructor(data, type) {
        const code = "TypeError";
        let message = `Argument type ${typeof data} is not assignable to parameter type ${type}`;
        if(Array.isArray(type)) message = `Argument type ${typeof data} is not assignable to parameter types: ${type.join(", ")}`;
        const response = (data && type) ? `${code}: ${message}` : code;
        super(response);
        this.name = this.code = code;
        this.message = response;
    }

    toString() {
        return this.message;
    }
}

/**
 * @function responseError
 * @param {Object} obj
 * @returns {{error: TypeException}}
 */
const responseError = (obj) => {
    const {data, types} = obj;
    return {error: new TypeException(data, types)};
};

/**
 * @private
 */
exports = module.exports = {
    ...{TypeException},
    ...{responseError}
};