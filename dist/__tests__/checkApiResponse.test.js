"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkApiResponse_1 = __importDefault(require("../checkApiResponse"));
var testApiObjectY = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "Y"
};
var testApiObjectN = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "N"
};
var testApiObjectD = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "D"
};
var testApiObjectS = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "S"
};
var resultY = { 'kycResult': true };
var resultN = { 'kycResult': false };
var resultD = { code: 'D', message: 'Document Error' };
var resultS = { code: 'S', message: 'Server Error' };
describe('Check the conversion of an apiResponse', function () {
    test("Check what the output for Y is", function () {
        var input = testApiObjectY;
        expect(checkApiResponse_1.default(input)).toMatchObject(resultY);
    });
    test("Check what the output for N is", function () {
        var input = testApiObjectN;
        expect(checkApiResponse_1.default(input)).toMatchObject(resultN);
    });
    test("Check what the output for D is", function () {
        var input = testApiObjectD;
        expect(checkApiResponse_1.default(input)).toMatchObject(resultD);
    });
    test("Check what the output for S is", function () {
        var input = testApiObjectS;
        expect(checkApiResponse_1.default(input)).toMatchObject(resultS);
    });
});
