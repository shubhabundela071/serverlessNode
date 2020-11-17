const ForgotPassService = require('../helpers/services/userFogotPass');
const Response = require('../helpers/helper/responseHelper');
const forgotPassword = async ( event ) => {
  try {
    const forgotPassResult = await ForgotPassService.userFogotPass(event);
    return forgotPassResult
  } catch (e) {
    return Response.handleError({}, "Something was worng");
 }
};
export {
    forgotPassword
}
