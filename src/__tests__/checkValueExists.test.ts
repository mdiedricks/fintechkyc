import checkValueExists from '../checkValueExists';

let testUserObject = "1985-02-08";

describe('Check if a value has characters in it', () => {
    test("Check if it's null or not", () => {
		let input = testUserObject;
		
        expect(checkValueExists(input)).toBe(true);
    });
});