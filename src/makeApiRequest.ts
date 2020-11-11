import axios  from 'axios';

async function makeApiRequest(reqObject : object, endPoint : any, headers : any){  
    
    let responseObj;
    
    await axios({
        method: 'post',
        url: endPoint, 
        data: JSON.stringify(reqObject),
        headers: headers 
    })
    .then( res  => {
        responseObj = res.data;
    })
    .catch( err => {
        console.error(err)
    });

    return responseObj;
}

export default makeApiRequest;