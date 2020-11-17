const UserRegisterService = require('../helpers/services/userRegister');
const Response = require('../helpers/helper/responseHelper');
const Register = async ( event ) => {
  try {
    const resultInvite = await UserRegisterService.userRegister(event);
    return resultInvite
  } catch (e) {
    console.log("Error log:", e);
    return Response.handleError({}, "Something was worng");
 }
}
export {
  Register
}