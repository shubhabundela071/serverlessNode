const handleError = async (data, msg) => {
  data = {
    success: false,
    data: data,
    message:msg
  }
  return ({
  statusCode: 400,
  body: JSON.stringify(data),
  headers: { "Access-Control-Allow-Origin": "*" }
  })
};

const handleSuccess = async (data, msg) => {
  data = {
    success: true,
    data: data,
    message:msg
  }
  return ({
  statusCode: 200,
  body: JSON.stringify(data),
  headers: { "Access-Control-Allow-Origin": "*" }
  })
};
export{
  handleSuccess,
  handleError
}