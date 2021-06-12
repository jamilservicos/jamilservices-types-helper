"use strict";
const check = require("./main"); // "@jamilservices/types-helper"

/**
 * @param {string} name
 * @param {(number || string)} value
 * @return {boolean}
 */
const example = (name, value) => {
    try {
        const t_name = check({types: "string", data: name});
        const t_number = check({types: ["number", "string"], data: value});
        if(typeof t_name === "object") throw t_name.error;
        if(typeof t_number === "object") throw t_number.error;

        return true;
    } catch (err) {
        return err.message;
    }
};

const success_example = example("string",1);
const error_example = example("string",1n);
if(typeof success_example === "boolean") console.log("success_example:", "successfully completed!");
if(typeof error_example === "string") console.log("error_example:", error_example);