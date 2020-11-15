let UserRegisterService = require('../helpers/services/userRegister');
const Register = async ( event ) => {
  try {
    const resultInvite = await UserRegisterService.userRegister(event);
    return resultInvite
  } catch (e) {
    return {statusCode: 400, body: JSON.stringify({data:{}, message: "Something was worng"
    })
  };
 }
}
export {
  Register
}
