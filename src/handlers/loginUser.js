const UserLoginService = require('../helpers/services/userLogin');
const Response = require('../helpers/helper/responseHelper');
const login = async ( event ) => {
  try {
    const resultInvite = await UserLoginService.userLogin(event);
    return resultInvite
  } catch (e) {
    return Response.handleError({}, "Something was worng");
 }
}
export {
  login
}