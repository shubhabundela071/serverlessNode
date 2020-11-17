const Joi = require('@hapi/joi')

/**
 * User invite 
 * @Description  Common User invitation
 */

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

/**
 * User register 
 * @Description  Common User registation
 */

const register = async (data) => {
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
      return userValidateData.error.details[0].message;
    } else{ 
      return true
  }
}

/**
 * User login 
 * @Description  Common User login
 */

const login = async (data) => {
	const JoiSchema = Joi.object({ 
    email: Joi.string().email().min(5).max(50).optional(), 
    password: Joi.string().required()
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
      return userValidateData.error.details[0].message;
    } else{ 
      return true
  }
}

/**
 * User Forgot Password 
 * @Description  Common Forgot Password 
 */

const forgotPass = async (data) => {
	const JoiSchema = Joi.object({ 
    email: Joi.string().email().min(5).max(50).optional()
    }).options({ abortEarly: false });
    let userValidateData=  JoiSchema.validate(data) 
    if(userValidateData.error){
      return userValidateData.error.details[0].message;
    } else{ 
      return true
  }
}
export{
  invite,
  register,
  login,
  forgotPass
 }