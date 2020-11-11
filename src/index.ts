import * as dotenv from 'dotenv';
dotenv.config();

import checkUser from './checkUser'
import { userObjectType } from './typeDeclarations';

// * TEST OBJECT FOR API QUERY
let userInput : userObjectType = {
	"birthDate":"1985-02-08",
	"givenName":"James",
	"middleName":"Robert",
	"familyName":"Smith",
	"licenceNumber":"94977000",
	"stateOfIssue":"NSW",
	"expiryDate":"2020-01-01"
}

// * ENV VARIABLES AND REQUEST =====================
const apiKey = process.env.API_KEY;
const apiEndpoint  = process.env.API_ENDPOINT;
const apiHeader = {
    'Authorization': `Bearer ${apiKey}`,
    "Content-type": 'application/json'
};

// * RUN MAIN PROGRAM =============================
checkUser(userInput, apiEndpoint, apiHeader);
checkUser(userInput, apiEndpoint, apiHeader);
checkUser(userInput, apiEndpoint, apiHeader);