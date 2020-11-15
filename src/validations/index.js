const Joi = require('@hapi/joi')
const invite = async (data) => {
	const JoiSchema = Joi.object({ 
    firstName: Joi.string().min(2).max(30).required(), 
    lastName: Joi.string().required(), 
    email: Joi.string().email().min(5).max(50).optional(), 
    role: Joi.string().required(),
    loopId: Joi.string().required(),
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
        return userValidateData.error.details[0].message;
      } else{ 
        return true
    }
}
const register = async (data) => {
    console.log("nice---")
	const JoiSchema = Joi.object({ 
    firstName: Joi.string().min(2).max(30).required(), 
    lastName: Joi.string().required(), 
    email: Joi.string().email().min(5).max(50).optional(), 
    role: Joi.string().required(),
    loopId: Joi.string().required(),
    password: Joi.string().required(), 
    invitedBy: Joi.string().required(),
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
        return {statusCode: 200, body: JSON.stringify({data: {}, message: userValidateData.error.details[0].message})}
       // return userValidateData.error.details[0].message;
      }else{ 
        return {statusCode: 200, body: JSON.stringify({data: {}, message: "User register successfully"})}
    }
}
const login = async (data) => {
	const JoiSchema = Joi.object({ 
    email: Joi.string().email().min(5).max(50).optional(), 
    password: Joi.string().required()
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
        return {statusCode: 200, body: JSON.stringify({data: {}, message: userValidateData.error.details[0].message})}
      }else{ 
        return {statusCode: 200, body: JSON.stringify({data: {}, message: "login successfully"})}
    }
}
const forgotPass = async (data) => {
	const JoiSchema = Joi.object({ 
    email: Joi.string().email().min(5).max(50).optional()
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
        return {statusCode: 200, body: JSON.stringify({data: {}, message: userValidateData.error.details[0].message})}
      }else{ 
        return {statusCode: 200, body: JSON.stringify({data: {}, message: "Send Email Otp"})}
    }
}
export{
  invite,
  register,
  login,
  forgotPass
 }