"use strict";

const {typesCheck} = require("./typesCheck");
const {TypeException, responseError} = require("./typeException");
const {customTypes} = require("./customTypes");

exports = module.exports = {
    typesCheck, TypeException, customTypes, responseError
};