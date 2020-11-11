"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var validateUserInput_1 = __importDefault(require("../validateUserInput"));
var testUserObject = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01" //number pattern YYYY-MM-DD
};
describe('Validate user input', function () {
    test("It should match a regexp", function () {
        var input = testUserObject;
        expect(validateUserInput_1.default(input)).toBe(true);
    });
});
