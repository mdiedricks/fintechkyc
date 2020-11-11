import axios  from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

// * Simulated user input based on test document
let userInput : userObjectType = {
	"birthDate":"1985-02-08",
	"givenName":"James",
	"middleName":"Robert",
	"familyName":"Smith",
	"licenceNumber":"94977000",
	"stateOfIssue":"NSW",
	"expiryDate":"2020-01-01"
}

const apiKey = process.env.API_KEY;
const apiEndpoint  = process.env.API_ENDPOINT;
const apiHeader = {
    'Authorization': `Bearer ${apiKey}`,
    "Content-type": 'application/json'
};



// * PRIMARY FUNCTION  ============================
const checkUser = async (userObject: userObjectType) => {
    // * 1. DONE return validated object
    const userValidationResult : boolean = validateUserInput(userObject); 
    
    // *2.  DONE check if object has been validated
    if(!userValidationResult){
        console.error(`Error: Please fill out all required fields`);
        return; 
    }

    // * 3. DONE returns data object
    const apiResponse = await makeApiRequest(userObject, apiEndpoint, apiHeader); 

    // TODO 4. return response code
    let responseCheck = checkApiResponse(apiResponse ); 
    
    console.log(responseCheck);
}



// * HELPER FUNCTIONS  ============================
const validateUserInput = (userInputObject : userObjectType) => {
    
    // * DONE check user input exists
    for(let key in userInputObject){  
        // The provided document states: 'middleName' and 'expiryDate' are not "required"
        if(key !== 'middleName' && key !== 'expiryDate'){
            let valueExists = checkValueExists(key);
            if(!valueExists) return false;
        }
    }
    

    // * DONE check user input matches regexp values
    for(let key in userInputObject){
        if(key){
            switch(key){
                case "birthDate":
                    if(!reChecks[0].test(userInputObject[key])){
                        console.log(`Error: ${key} does not match YYYY-MM-DD format.`)
                        return false;
                    }
                    break;
                case "givenName":
                    if(!reChecks[1].test(userInputObject[key])){
                        console.log(`Error: ${key} has too many characters`)
                        return false;
                    } 
                    break;
                case "middleName":
                    if(!reChecks[1].test(userInputObject[key])){
                        console.log(`Error: ${key} has too many characters`)
                        return false;
                    }
                    break;
                case "familyName":
                    if(!reChecks[1].test(userInputObject[key])){
                        console.log(`Error: ${key} has too many characters`)
                        return false;
                    }
                    break;            
                case "licenceNumber":
                    break;            
                case "stateOfIssue":
                    if(!states.includes(userInputObject[key])){
                        console.log(`Error: ${key} is not from the available list`)
                        return false;
                    }
                    break;            
                case "expiryDate":
                    if(!reChecks[0].test(userInputObject[key]))
                    break;  
            }
        }            
    }
    return true;
}

let reChecks = [/\d{4}-\d{2}-\d{2}/, /\w{0,100}/, /\d+/]
let states = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];

const checkValueExists = (value : string) =>{
    if(value.length !== 0 && value){
        return true;
    } else {
        return false;
    }
}

async function makeApiRequest(reqObject : object, endPoint : any, headers : any){  
    
    let responseObj;
    
    await axios({
        method: 'post',
        url: endPoint, 
        data: JSON.stringify(reqObject),
        headers: headers 
    })
    .then( res => {
        responseObj = res.data;
    })
    .catch( err => {
        console.error(err)
    });

    return responseObj;
}

const checkApiResponse = (apiBlob : any) =>{

    switch(apiBlob.verificationResultCode){
        case 'Y':
            //do something
            return {'kycResult' : true}                       
        case 'N':
            //do something
            return {'kycResult' : false}       
        case 'D' :
            //do something
            return {code: 'D',message: 'Document Error'}    
        case  'S':
            //do something
            return {code: 'S',message: 'Server Error'}       
        default:
            console.log(`No result received`)
            break;
    }
    return null;
}



// * TYPE DECLARATIONS ============================
interface userObjectType {
    "birthDate" : string,
    "givenName" : string,
    "middleName" : string,
    "familyName" : string,
    "licenceNumber" : string,
    "stateOfIssue" : string,
    "expiryDate" : string
}



// * RUN MAIN PROGRAM =============================
checkUser(userInput);
checkUser(userInput);
checkUser(userInput);

