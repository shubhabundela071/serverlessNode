let UserInvitationService = require('../helpers/services/userInvite');
const InviteUser = async ( event ) => {
const data = JSON.parse(event.body);
  try {
    const resultInvite = await UserInvitationService.userInvite(data);
    return resultInvite
  } catch (e) {
    return {statusCode: 400, body: JSON.stringify({data:{}, message: "Something was worng"
    })
  };
 }
}
export {
  InviteUser
}