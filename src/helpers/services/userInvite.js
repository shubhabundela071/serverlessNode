import { Email } from '../helper/email';
let Validation = require('../../validations/index');
const userInvite = async (data, context) => {
 //validations here
  const userValidateData = await Validation.invite(data);
  // User email invite here:
  // let link = 'abc.com';
  // const userInviteData =  await Email.sendEmailInvitation(data.email, "Placement Loop", "Hii " + data.name + ", <br> Welcome to Placement Loop.<br>Please do not share this link with anyone for security reasons. " + link + "</b>" + "");
  // console.log(userInviteData, "userInviteData----");
  if(userValidateData != true){
      return {statusCode: 400,body: JSON.stringify({data: {}, message: userValidateData})}
    }
    else{ 
      return {statusCode: 200, body: JSON.stringify({data: {}, message: "User invited successfully"})}
    }
 //here the DBquery
// return userInvite;
};
export {
  userInvite
};