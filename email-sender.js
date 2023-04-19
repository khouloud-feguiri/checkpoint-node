const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
 service: 'gmail',
  auth: {
    user: 'koko01@gmail.com',
    pass: 'iejfodfkpf'
  }
});
const mailOptions = {
  from: 'koko01@gmail.com',
  to: 'koko01@gmail.com', 
  subject: 'Test Email',
  text: "Test Email"
};
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
