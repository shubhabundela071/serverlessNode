let UserLoginService = require('../helpers/services/userLogin');
const login = async ( event ) => {
  try {
    const resultInvite = await UserLoginService.userLogin(event);
    return resultInvite
  } catch (e) {
    return {statusCode: 400, body: JSON.stringify({data:{}, message: "Something was worng"
    })
  };
 }
}
export {
  login
}