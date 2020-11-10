"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// * IMPORTS
var axios_1 = __importDefault(require("axios"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// * CONSTANTS
var apiKey = process.env.API_KEY;
var apiEndpoint = process.env.API_ENDPOINT;
var apiHeader = {
    'Authorization': "Bearer " + apiKey,
    "Content-type": 'application/json'
};
// * FUNCTION DECLARATION
var retrieveUserDetails = function (userObject) {
    var userRequestObject = {
        "birthDate": userObject.birthDate,
        "givenName": userObject.givenName,
        "middleName": userObject.middleName,
        "familyName": userObject.familyName,
        "licenceNumber": userObject.licenceNumber,
        "stateOfIssue": userObject.stateOfIssue,
        "expiryDate": userObject.expiryDate
    };
    // TODO validate user input - possibly in separate functions
    // should return new user object or error
    var validatedUserObject = validateUserInput(userRequestObject);
    // TODO make get request
    var apiResponse = axios_1.default({
        method: 'post',
        url: apiEndpoint,
        data: validatedUserObject,
        headers: apiHeader
    })
        .then(function (res) {
        // TODO run check on API response - return value
        console.log(res.data);
        return res;
    })
        .catch(function (err) {
        // TODO error handling - return error if any
        console.log(err);
    });
    return apiResponse;
};
var validateUserInput = function (userInputObject) {
    var validatedUserInput = userInputObject;
    // TODO run checks on userInput
    return validatedUserInput;
};
exports.default = retrieveUserDetails;
//# sourceMappingURL=retrieveUser.js.map