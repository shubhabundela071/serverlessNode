//const Email = require('../helper/email');
const Validation = require('../../validations');
const Response = require('../../helpers/helper/responseHelper');
const userInvite = async (event) => {
  // validations here
  const data = JSON.parse(event.body);
  const userValidateData = await Validation.invite(data);
  // User email invite here:
  // let link = 'abc.com';
  // const userInviteData =  await Email.sendEmailInvitation(data.email, "Placement Loop", "Hii " + data.name + ", <br> Welcome to Placement Loop.<br>Please do not share this link with anyone for security reasons. " + link + "</b>" + "");

  //here the DBquery
  if(userValidateData != true){
      return Response.handleError({}, userValidateData);
    }else{
      return Response.handleSuccess(data, "User invited successfully");
   }
};
export {
  userInvite
};