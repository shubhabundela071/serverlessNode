let ForgotPassService = require('../helpers/services/userFogotPass');
const forgotPassword = async ( event ) => {
  try {
    const forgotPassResult = await ForgotPassService.userFogotPass(event);
    return forgotPassResult
  } catch (e) {
    return {statusCode: 400, body: JSON.stringify({data:{}, message: "Something was worng"
    })
  };
 }
}
export {
    forgotPassword
}
