//import ResponseObject from '../helper/responseHelper';
let Validation = require('../../validations/index');
const userFogotPass= async (event, context) => {
  const data = JSON.parse(event.body);
//let userLogin = true
    const userValidateData = await Validation.forgotPass(data);
    //data is hold all res params and update DBQuery pass the data
  
    //here the DBQuery
   return userValidateData
  }
export{
userFogotPass
}