import validateUserInput from './validateUserInput';
import checkApiResponse from './checkApiResponse';
import makeApiRequest from './makeApiRequest';
import {userObjectType} from './typeDeclarations';

const checkUser = async (userObject: userObjectType, apiEndPt :any, apiHder:any) => {
    // 1 - validate user input
    const userValidationResult : boolean = validateUserInput(userObject); 
    if(!userValidationResult){
        console.error(`Error: Please fill out all required fields`);
        return; 
    }
    // 2 - make api request with user object
    const apiResponse = await makeApiRequest(userObject, apiEndPt, apiHder); 
    
    //3 - generate response based on verification code
    let responseCheck = checkApiResponse(apiResponse ); 
    
    //4 - output reponse code to console
    console.log(responseCheck);
}

export default checkUser;