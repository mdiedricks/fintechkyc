import validateUserInput from '../validateUserInput';

let testUserObject = {
	"birthDate":"1985-02-08",
	"givenName":"James",
	"middleName":"Robert",
	"familyName":"Smith",
	"licenceNumber":"94977000",
	"stateOfIssue":"NSW",
	"expiryDate":"2020-01-01"
}



describe('Validate user input', () => {
    test("It should match a regexp", () => {
		let re = /\d{4}-\d{2}-\d{2}/;
        expect(testUserObject.birthDate).toMatch(re);
    });
});