// * IMPORTS
import axios  from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// * CONSTANTS
const API_KEY = process.env.API_KEY;
const API_ENDPOINT = '';
const API_HEADER = {
    "token" : API_KEY,
    "Content-type": 'application/json'
};


// * FUNCTION DECLARATION
const retrieveUserDetails = (birthDate, givenName, middleName, familyName, licenseNumber, stateOfIssue, expiryDate) => {
    const requestObject = {
        "birthDate" : birthDate,
        "givenName" : givenName,
        "middleName" : middleName,
        "familyName" : familyName,
        "licenceNumber" : licenseNumber,
        "stateOfIssue" : stateOfIssue,
        "expiryDate" : expiryDate
    };
    // TODO validate user input - possibly in separate functions
    validateUserInput(requestObject)



    // TODO make get request
    axios.get('', requestObject)
        .then(
            // TODO run check on API response
        )
        .catch(
            // TODO error handling
        )
}

const validateUserInput = (userObject) => {

}

export default retrieveUserDetails;