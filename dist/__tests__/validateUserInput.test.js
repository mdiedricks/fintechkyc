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
describe('Validate user input', function () {
    test("It should match a regexp", function () {
        var input = testUserObject;
        var ouput = /\d{4}-\d{2}-\d{2}/;
        expect(input).toMatch(ouput);
    });
});
//# sourceMappingURL=validateUserInput.test.js.map