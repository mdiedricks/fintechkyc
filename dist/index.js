"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var retrieveUser_1 = __importDefault(require("./retrieveUser"));
// * Simulated user input based on test document
var userInput = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01"
};
var apiResponse = retrieveUser_1.default(userInput);
console.log(apiResponse);
//# sourceMappingURL=index.js.map