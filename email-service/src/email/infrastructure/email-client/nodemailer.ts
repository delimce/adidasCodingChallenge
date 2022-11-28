const nodemailer = require('nodemailer');

const credentials = nodemailer.createTestAccount();

//fake configuration with ethereal email account
const transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: credentials.user,
      pass: credentials.pass
      },
});


export default transport;