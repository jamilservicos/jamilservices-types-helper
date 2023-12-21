"use strict";

/*
const util = require('util');
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
const custom = {
    integer: (x) => {
        if (Number.isInteger(x)) return true;
        return undefined;
    },
    array: (x) => {
        if (Array.isArray(x)) return true;
        return undefined;
    },
    buffer: (x) => {
        if (Buffer.isBuffer(x)) return true;
        return undefined;
    },
    int8: (x) => {
        if (util.types.isInt8Array(x)) return true;
        return undefined;
    },
    uint8: (x) => {
        if (util.types.isUint8Array(x)) return true;
        return undefined;
    },
    int16: (x) => {
        if (util.types.isInt16Array(x)) return true;
        return undefined;
    },
    uint16: (x) => {
        if (util.types.isUint16Array(x)) return true;
        return undefined;
    },
    int32: (x) => {
        if (util.types.isInt32Array(x)) return true;
        return undefined;
    },
    uint32: (x) => {
        if (util.types.isUint32Array(x)) return true;
        return undefined;
    },
};
const custom_types = new Set(Object.keys(custom));
const types_check = (data, types) => {
    const onerror = {error: new TypeException(data, types)};
    const t = new Set(types);
    if (t.has(typeof data)) return true;
    let s = new Set([...types].filter(x => custom_types.has(x)));
    if (s.size > 0) {
        const keys = [...s];
        if(s.size === 1) {
            if((typeof custom[keys[0]] === "function") && (custom[keys[0]](data))) return true;
            return onerror;
        } else {
            for (let i = (keys.length - 1); i >= 0; i--) {
                const key = keys[i];
                if ((key) && (typeof custom[key] === "function") && (custom[key](data))) return true;
                if (i === 0) return onerror;
            }
        }
    } else return onerror;
};
*/
/**
 * @param {object} o
 * @param {*} o.data
 * @param {(string || object[])} o.types
 * @return {(boolean || object)}
 */
exports = module.exports = (o) => {
    if (typeof o === "object") {
        if ((typeof o.types === "object") && (Array.isArray(o.types))) return types_check(o.data, o.types);
        if (typeof o.types === "string") {
            if(typeof o.data === o.types) return true;
            if(custom_types.has(o.types)) return custom[o.types](o.data);
        }
        return {error: new TypeException(o.data, o.types)};
    } else return {error: new TypeException(o.data, "object")};
};
