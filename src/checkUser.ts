// import * as dotenv from 'dotenv';
// dotenv.config();
import validateUserInput from './validateUserInput';
import checkApiResponse from './checkApiResponse';
import makeApiRequest from './makeApiRequest';
import {userObjectType} from './typeDeclarations';

// const apiKey = process.env.API_KEY;
// const apiEndpoint  = process.env.API_ENDPOINT;
// const apiHeader = {
//     'Authorization': `Bearer ${apiKey}`,
//     "Content-type": 'application/json'
// };


const checkUser = async (userObject: userObjectType, apiEndPt :any, apiHder:any) => {
    // * 1. DONE return validated object
    const userValidationResult : boolean = validateUserInput(userObject); 
    
    // *2.  DONE check if object has been validated
    if(!userValidationResult){
        console.error(`Error: Please fill out all required fields`);
        return; 
    }

    // * 3. DONE returns data object
    const apiResponse = await makeApiRequest(userObject, apiEndPt, apiHder); 

    // TODO 4. return response code
    let responseCheck = checkApiResponse(apiResponse ); 
    
    console.log(responseCheck);
}

export default checkUser;