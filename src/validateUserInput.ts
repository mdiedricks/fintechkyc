import { userObjectType} from './typeDeclarations';

let testUserObject = {
	"birthDate":"1985-02-08", // number pattern YYYY-MM-DD
	"givenName":"James", // letters max 100 characters
	"middleName":"Robert", //letters max 100 characters
	"familyName":"Smith", //letters max 100 characters
	"licenceNumber":"94977000", // numbers 
	"stateOfIssue":"NSW", // options check Array
	"expiryDate":"2020-01-01" //number pattern YYYY-MM-DD
}

const validateUserInput = (userInputObject : userObjectType) => {
    let userDataExists = userInputObject;
    
    // TODO check user input exists
    for(let key in userDataExists){  
        // Provided document states: 'middleName' and 'expiryDate' are not "required"
        if(key !== 'middleName' && key !== 'expiryDate'){
            let valueExists = checkValueExists(key);

            if(!valueExists){
                console.error(`Please fill out all required fields`);
                return ;
            }
        }
    }
    console.log('All inputs have been filled')

    // TODO check user input matches regexp values


    return null;
}

export default validateUserInput;


const checkValueExists = (value : string) =>{
    if(value.length !== 0 && value && value != null){
        return true;
    } else {
        return false;
    }
}