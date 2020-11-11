import { checkApiResponse } from '../checkApiResponse';

let testApiObjectY = {
    "verificationDocumentResult": {
      "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "Y"
  };
let testApiObjectN = {
    "verificationDocumentResult": {
        "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "N"
};
let testApiObjectD = {
"verificationDocumentResult": {
    "type": "DriverLicenceResponse"
},
"verificationRequestNumber": 15345,
"verificationResultCode": "D"
};
let testApiObjectS = {
    "verificationDocumentResult": {
      "type": "DriverLicenceResponse"
    },
    "verificationRequestNumber": 15345,
    "verificationResultCode": "S"
};

let resultY = {'kycResult' : true};                     
let resultN ={'kycResult' : false};      
let resultD = {code: 'D',message: 'Document Error'};   
let resultS = {code: 'S',message: 'Server Error'};       


describe('Check the conversion of an apiResponse', () => {
    test("Check what the output for Y is", () => {
		let input = testApiObjectY;
        expect(checkApiResponse(input)).toMatchObject(resultY);
    });

    test("Check what the output for N is", () => {
		let input = testApiObjectN;
        expect(checkApiResponse(input)).toMatchObject(resultN);
    });

    test("Check what the output for D is", () => {
		let input = testApiObjectD;
        expect(checkApiResponse(input)).toMatchObject(resultD);
    });

    test("Check what the output for S is", () => {
		let input = testApiObjectS;
        expect(checkApiResponse(input)).toMatchObject(resultS);
    });

});