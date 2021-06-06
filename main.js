"use strict";

class TypeException extends Error {
    constructor(data, type) {
        const code = "TypeError";
        let message = `Argument type ${typeof data} is not assignable to parameter type ${type}`;
        if(Array.isArray(type)) message = `Argument type ${typeof data} is not assignable to parameter types: ${type.join(" ,")}`;
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
 * @param {*} data
 * @param {object} types
 * @return {(boolean || object)}
 */
const types_check = (data, types) => {
    const t = new Set(types);
    if(t.has(typeof data)) return true;
    return {error: new TypeException(data, types)};
};

/**
 * @param {object} o
 * @param {*} o.data
 * @param {(string || object[])} o.types
 * @return {(boolean || object)}
 */
exports = module.exports = (o) => {
    if (typeof o === "object") {
        if ((typeof o.types === "object") && (Array.isArray(o.types))) return types_check(o.data, o.types);
        if ((typeof o.types === "string") && (typeof o.data === o.types)) return true;
        return {error: new TypeException(o.data, o.types)};
    } else return {error: new TypeException(o.data, "object")};
};
