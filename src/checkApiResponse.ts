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

export default checkApiResponse;