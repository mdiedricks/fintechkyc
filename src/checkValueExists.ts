const checkValueExists = (value : string) =>{
    if(value.length !== 0 && value && value != null){
        return true;
    } else {
        return false;
    }
}

export default checkValueExists;