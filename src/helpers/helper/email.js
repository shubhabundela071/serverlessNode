const sgMail = require('@sendgrid/mail');
//const sendgrid = require('..env').sendgrid; //here the sendgrid APIs
const sendEmailInvitation = async (to, subject, text) => {
const msg = {
        to: to,
        from: 'support@pLoop.com',
        subject: subject,
        html: text
    };
    sgMail.send(msg)
        .then(() => {
           console.log("Invitation send")
        })
        .catch(error => {
            console.error(error.toString());
            const {
                message,
                code,
                response
            } = error;
            const {
                headers,
                body
            } = response;
        });
    }

export{
    sendEmailInvitation
}