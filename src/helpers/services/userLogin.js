const Response = require('../../helpers/helper/responseHelper');
const Validation = require('../../validations');
const userLogin= async (event) => {
  const data = JSON.parse(event.body);
//let userLogin = true
    const userValidateData = await Validation.login(data);
    //data is hold all res params and update DBQuery pass the data
  
    //here the DBQuery
    if(userValidateData != true){
      return Response.handleError({}, userValidateData);
    }else{
      return Response.handleSuccess(data, "User register successfully");
   }
  // return userValidateData
  }
export{
  userLogin
}