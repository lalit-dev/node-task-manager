const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SENDGRID_FROM_MAIL,
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
    // .then(res => {
    //     console.log("[ sendWelcomeEmail ] response: ", res);
    // }).catch(err => {
    //     console.log("[ sendWelcomeEmail ] error: ", err.response.body);
    // })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SENDGRID_FROM_MAIL,
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
    // .then(res => {
    //     console.log("[ sendCancelationEmail ] response: ", res);
    // }).catch(err => {
    //     console.log("[ sendCancelationEmail ] error: ", err.response.body);
    // })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}