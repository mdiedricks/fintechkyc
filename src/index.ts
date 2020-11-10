import checkUser from './checkUser';

// * Simulated user input based on test document
let userInput = {
	"birthDate":"1985-02-08",
	"givenName":"James",
	"middleName":"Robert",
	"familyName":"Smith",
	"licenceNumber":"94977000",
	"stateOfIssue":"NSW",
	"expiryDate":"2020-01-01"
}

checkUser(userInput);