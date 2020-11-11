"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkValueExists = function (value) {
    if (value.length !== 0 && value && value != null) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = checkValueExists;
