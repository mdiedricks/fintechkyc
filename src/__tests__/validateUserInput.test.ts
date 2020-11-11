import validateUserInput from '../validateUserInput';

let testUserObject = {
	"birthDate":"1985-02-08", // number pattern YYYY-MM-DD
	"givenName":"James", // letters max 100 characters
	"middleName":"Robert", //letters max 100 characters
	"familyName":"Smith", //letters max 100 characters
	"licenceNumber":"94977000", // numbers 
	"stateOfIssue":"NSW", // options check Array
	"expiryDate":"2020-01-01" //number pattern YYYY-MM-DD
}



describe('Validate user input', () => {
    test("It should match a regexp", () => {
		let input = testUserObject;
		
		let ouput = /\d{4}-\d{2}-\d{2}/;
        expect(input).toMatch(ouput);
    });
});