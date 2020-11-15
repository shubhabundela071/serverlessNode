//import ResponseObject from '../helper/responseHelper';
let Validation = require('../../validations/index');
const userRegister= async (event, context) => {
  const data = JSON.parse(event.body);
    console.log("nice")
    let userData = true
    const userValidateData = await Validation.register(data);
    //data is hold all res params and update DBQuery pass the data
  
    //here the DBQuery
   return userValidateData
  }
export{
  userRegister
}
