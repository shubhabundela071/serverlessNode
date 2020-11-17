const Response = require('../../helpers/helper/responseHelper');
const Validation = require('../../validations');
const userRegister= async (event, context) => {
  const data = JSON.parse(event.body);
    const userValidateData = await Validation.register(data);
    //data is hold all res params and update DBQuery pass the data
  
    //here the DBQuery
    if(userValidateData != true){
      return Response.handleError({}, userValidateData);
    }else{
      return Response.handleSuccess(data, "User registration successfully");
   }
  }
export{
  userRegister
}
