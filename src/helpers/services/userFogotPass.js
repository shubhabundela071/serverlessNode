const Validation = require('../../validations');
//const Email = require('../helper/email');
const Response = require('../../helpers/helper/responseHelper');
const userFogotPass= async (event) => {
  const data = JSON.parse(event.body);
    const userValidateData = await Validation.forgotPass(data);
    //data is hold all res params and update DBQuery pass the data
  
    //here the DBQuery
    //  User email invite here:
    // let OTP = 12345678;
    // const userInviteData =  await Email.sendEmailInvitation(data.email, "Reset Password", "Hii " + data.name + ", <br> Welcome to Placement Loop.<br>Please do not share this OTP with anyone for security reasons.");
    if(userValidateData != true){
      return Response.handleError({}, userValidateData);
    }else{
      return Response.handleSuccess({}, "OTP has been sent your email-id");
   }
  }
export{
userFogotPass
}