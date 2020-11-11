"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkValueExists_1 = __importDefault(require("./checkValueExists"));
var validateUserInput = function (userInputObject) {
    for (var key in userInputObject) {
        // The provided document states: 'middleName' and 'expiryDate' are not "required"
        if (key !== 'middleName' && key !== 'expiryDate') {
            var valueExists = checkValueExists_1.default(key);
            if (!valueExists)
                return false;
        }
    }
    for (var key in userInputObject) {
        if (key) {
            switch (key) {
                case "birthDate":
                    if (!reChecks[0].test(userInputObject[key])) {
                        console.log("Error: " + key + " does not match YYYY-MM-DD format.");
                        return false;
                    }
                    break;
                case "givenName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "middleName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "familyName":
                    if (!reChecks[1].test(userInputObject[key])) {
                        console.log("Error: " + key + " has too many characters");
                        return false;
                    }
                    break;
                case "licenceNumber":
                    break;
                case "stateOfIssue":
                    if (!states.includes(userInputObject[key])) {
                        console.log("Error: " + key + " is not from the available list");
                        return false;
                    }
                    break;
                case "expiryDate":
                    if (!reChecks[0].test(userInputObject[key]))
                        break;
            }
        }
    }
    return true;
};
var reChecks = [/\d{4}-\d{2}-\d{2}/, /\w{0,100}/, /\d+/];
var states = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];
exports.default = validateUserInput;
// export const checkValueExists = (value : string) =>{
//     if(value.length !== 0 && value && value != null){
//         return true;
//     } else {
//         return false;
//     }
// }
