import * as dotenv from 'dotenv';
dotenv.config();
import validateUserInput from './validateUserInput';
import checkApiResponse from './checkApiResponse';
import makeApiRequest from './makeApiRequest';
import {userObjectType} from './typeDeclarations';

const apiKey = process.env.API_KEY;
const apiEndpoint  = process.env.API_ENDPOINT;
const apiHeader = {
    'Authorization': `Bearer ${apiKey}`,
    "Content-type": 'application/json'
};


const checkUser = async (userObject: userObjectType) => {
    // assign input to new Object
    let userRequestObject = {
        "birthDate" : userObject.birthDate,
        "givenName" : userObject.givenName,
        "middleName" : userObject.middleName,
        "familyName" : userObject.familyName,
        "licenceNumber" : userObject.licenceNumber,
        "stateOfIssue" : userObject.stateOfIssue,
        "expiryDate" : userObject.expiryDate
    };
    
    // validate user input
    // TODO return calidated object
    const validatedUserObject : any = validateUserInput(userRequestObject); 

    // make get request to API
    // * DONE returns data object
    const apiResponse = await makeApiRequest(validatedUserObject, apiEndpoint, apiHeader); 

    // run check on response object
    // TODO return response code
    let responseCheck = checkApiResponse(apiResponse ); 
    
    console.log(responseCheck);
}

export default checkUser;