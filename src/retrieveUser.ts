// * IMPORTS
import axios  from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// * CONSTANTS
const apiKey = process.env.API_KEY;
const apiEndpoint = process.env.API_ENDPOINT;
const apiHeader = {
    'Authorization': `Bearer ${apiKey}`,
    "Content-type": 'application/json'
};

// * FUNCTION DECLARATION
const retrieveUserDetails = (userObject: userObjectType) => {
    let userRequestObject = {
        "birthDate" : userObject.birthDate,
        "givenName" : userObject.givenName,
        "middleName" : userObject.middleName,
        "familyName" : userObject.familyName,
        "licenceNumber" : userObject.licenceNumber,
        "stateOfIssue" : userObject.stateOfIssue,
        "expiryDate" : userObject.expiryDate
    };
    
    // TODO validate user input - possibly in separate functions
    // should return new user object or error
    let validatedUserObject = validateUserInput(userRequestObject)


    // TODO make get request
    axios({
        method: 'post',
        url: apiEndpoint, 
        data: validatedUserObject,
        headers: apiHeader
        })
        .then(
            // TODO run check on API response - return value
        )
        .catch(
            // TODO error handling - return error if any
        )
}

const validateUserInput = (userInputObject: userObjectType) => {
    let validatedUserInput = userInputObject;
    // TODO run checks on userInput

    return validatedUserInput
}

export default retrieveUserDetails;

// * TYPESCRIPT DEFINITIONS
interface userObjectType {
    "birthDate" : string,
    "givenName" : string,
    "middleName" : string,
    "familyName" : string,
    "licenceNumber" : string,
    "stateOfIssue" : string,
    "expiryDate" : string
}