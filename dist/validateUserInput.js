"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testUserObject = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01" //number pattern YYYY-MM-DD
};
var validateUserInput = function (userInputObject) {
    var userDataExists = userInputObject;
    // TODO check user input exists
    for (var key in userDataExists) {
        // Provided document states: 'middleName' and 'expiryDate' are not "required"
        if (key !== 'middleName' && key !== 'expiryDate') {
            var valueExists = checkValueExists(key);
            if (!valueExists) {
                console.error("Please fill out all required fields");
                return;
            }
        }
    }
    console.log('All inputs have been filled');
    // TODO check user input matches regexp values
    return null;
};
exports.default = validateUserInput;
var checkValueExists = function (value) {
    if (value.length !== 0 && value && value != null) {
        return true;
    }
    else {
        return false;
    }
};
//# sourceMappingURL=validateUserInput.js.map