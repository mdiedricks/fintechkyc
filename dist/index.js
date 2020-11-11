"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import axios  from 'axios';
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// import checkApiResponse  from './checkApiResponse' ;
// import validateUserInput from './validateUserInput';
// import makeApiRequest from './makeApiRequest';
var checkUser_1 = __importDefault(require("./checkUser"));
// * Simulated user input based on test document
var userInput = {
    "birthDate": "1985-02-08",
    "givenName": "James",
    "middleName": "Robert",
    "familyName": "Smith",
    "licenceNumber": "94977000",
    "stateOfIssue": "NSW",
    "expiryDate": "2020-01-01"
};
var apiKey = process.env.API_KEY;
var apiEndpoint = process.env.API_ENDPOINT;
var apiHeader = {
    'Authorization': "Bearer " + apiKey,
    "Content-type": 'application/json'
};
// * PRIMARY FUNCTION  ============================
// const checkUser = async (userObject: userObjectType, apiEndPt :any, apiHder:any) => {
//     // * 1. DONE return validated object
//     const userValidationResult : boolean = validateUserInput(userObject); 
//     // *2.  DONE check if object has been validated
//     if(!userValidationResult){
//         console.error(`Error: Please fill out all required fields`);
//         return; 
//     }
//     // * 3. DONE returns data object
//     const apiResponse = await makeApiRequest(userObject, apiEndPt, apiHder); 
//     // TODO 4. return response code
//     let responseCheck = checkApiResponse(apiResponse ); 
//     console.log(responseCheck);
// }
// * RUN MAIN PROGRAM =============================
checkUser_1.default(userInput, apiEndpoint, apiHeader);
checkUser_1.default(userInput, apiEndpoint, apiHeader);
checkUser_1.default(userInput, apiEndpoint, apiHeader);
// * HELPER FUNCTIONS  ============================
// const validateUserInput = (userInputObject : userObjectType) => {
//     // * DONE check user input exists
//     for(let key in userInputObject){  
//         // The provided document states: 'middleName' and 'expiryDate' are not "required"
//         if(key !== 'middleName' && key !== 'expiryDate'){
//             let valueExists = checkValueExists(key);
//             if(!valueExists) return false;
//         }
//     }
//     // * DONE check user input matches regexp values
//     for(let key in userInputObject){
//         if(key){
//             switch(key){
//                 case "birthDate":
//                     if(!reChecks[0].test(userInputObject[key])){
//                         console.log(`Error: ${key} does not match YYYY-MM-DD format.`)
//                         return false;
//                     }
//                     break;
//                 case "givenName":
//                     if(!reChecks[1].test(userInputObject[key])){
//                         console.log(`Error: ${key} has too many characters`)
//                         return false;
//                     } 
//                     break;
//                 case "middleName":
//                     if(!reChecks[1].test(userInputObject[key])){
//                         console.log(`Error: ${key} has too many characters`)
//                         return false;
//                     }
//                     break;
//                 case "familyName":
//                     if(!reChecks[1].test(userInputObject[key])){
//                         console.log(`Error: ${key} has too many characters`)
//                         return false;
//                     }
//                     break;            
//                 case "licenceNumber":
//                     break;            
//                 case "stateOfIssue":
//                     if(!states.includes(userInputObject[key])){
//                         console.log(`Error: ${key} is not from the available list`)
//                         return false;
//                     }
//                     break;            
//                 case "expiryDate":
//                     if(!reChecks[0].test(userInputObject[key]))
//                     break;  
//             }
//         }            
//     }
//     return true;
// }
// let reChecks = [/\d{4}-\d{2}-\d{2}/, /\w{0,100}/, /\d+/]
// let states = ['NSW', 'QLD', 'SA', 'TAS', 'VIC', 'WA', 'ACT', 'NT'];
// const checkValueExists = (value : string) =>{
//     if(value.length !== 0 && value){
//         return true;
//     } else {
//         return false;
//     }
// }
// async function makeApiRequest(reqObject : object, endPoint : any, headers : any){  
//     let responseObj;
//     await axios({
//         method: 'post',
//         url: endPoint, 
//         data: JSON.stringify(reqObject),
//         headers: headers 
//     })
//     .then( res  => {
//         responseObj = res.data;
//     })
//     .catch( err => {
//         console.error(err)
//     });
//     return responseObj;
// }
// export const checkApiResponse = (apiBlob : any) =>{
//     switch(apiBlob.verificationResultCode){
//         case 'Y':
//             //do something
//             return {'kycResult' : true}                       
//         case 'N':
//             //do something
//             return {'kycResult' : false}       
//         case 'D' :
//             //do something
//             return {code: 'D',message: 'Document Error'}    
//         case  'S':
//             //do something
//             return {code: 'S',message: 'Server Error'}       
//         default:
//             console.log(`No result received`)
//             break;
//     }
//     return null;
// }
// * TYPE DECLARATIONS ============================
// interface userObjectType {
//     "birthDate" : string,
//     "givenName" : string,
//     "middleName" : string,
//     "familyName" : string,
//     "licenceNumber" : string,
//     "stateOfIssue" : string,
//     "expiryDate" : string
// }
