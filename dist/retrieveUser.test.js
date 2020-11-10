"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var retrieveUser_1 = __importDefault(require("./retrieveUser"));
var testUserObject = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01"
};
var desiredUserObject = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": expect.stringMatching(/[0-9]{5}/),
    "verificationResultCode": expect.stringMatching(/\w/i)
};
test("Returns data object from api request", function () {
    expect(retrieveUser_1.default(testUserObject)).toMatchObject(desiredUserObject);
});
//# sourceMappingURL=retrieveUser.test.js.map