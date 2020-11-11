"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkValueExists_1 = __importDefault(require("../checkValueExists"));
var testUserObject = "1985-02-08";
describe('Check if a value has characters in it', function () {
    test("Check if it's null or not", function () {
        var input = testUserObject;
        expect(checkValueExists_1.default(input)).toBe(true);
    });
});
