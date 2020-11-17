const UserInvitationService = require('../helpers/services/userInvite');
const Response = require('../helpers/helper/responseHelper');
const InviteUser = async ( event ) => {
  try {
    const resultInvite = await UserInvitationService.userInvite(event);
    return resultInvite
   // return handleSuccess(resultInvite, "msg");
  } catch (e) {
    console.log("Error log:", e);
   return Response.handleError({}, "Something was worng");
 }
}
export {
  InviteUser
}