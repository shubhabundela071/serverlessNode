
const pe = require('parse-error'); //parses error so you can read error message and handle them accordingly
module.exports = {
to : function (promise) { 
  return promise
    .then(data => {
      return [null, data];
    }).catch(err => [pe(err)]);
},
successResponse: function (res, code, data, message) {
  return res.status(code || 200).json({
    success: true,
    data,
    code,
    message
  })
},
handleSuccess :function (res, data, message) {
  return successResponse(res, 200, data, message);
},
handleError : function (res, data, message) {
  res.statusCode = 406;
  return res.json({
    success: false,
    code: 406,
    data: data,
    message: message
  })
}
}