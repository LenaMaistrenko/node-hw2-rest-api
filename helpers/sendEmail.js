const nodemailer = require("nodemailer");
require("dotenv").config();
const { META_PASSWORD } = process.env;
console.log("META_PASSWORD", META_PASSWORD);
const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "viompa@meta.ua",
    pass: META_PASSWORD,
  },
};
console.log(META_PASSWORD);
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (email, verificationToken) => {
  const msg = {
    to: email,
    from: "viompa@meta.ua",
    subject: "Verification email address",
    html: `<p>By clicking on the following link, you are confirming your email address.
    <a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Confirm email address</a></p>`,
  };

  console.log(msg);

  transport
    .sendMail(msg)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log("!!!!!!!!!!", error.message));
};
// const sgMail = require("@sendgrid/mail");
// require("dotenv").config();

// const { SENDGRID_API_KEY } = process.env;
// console.log(SENDGRID_API_KEY);
// sgMail.setApiKey(SENDGRID_API_KEY);
// const sendEmail = async (email, verificationToken) => {
//   const msg = {
//     to: email,
//     from: "viompa@meta.ua",
//     subject: "Verification email address",
//     html: `<p>By clicking on the following link, you are confirming your email address.
//     <a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Confirm email address</a></p>`,
//   };
//   console.log(email, "msg", msg);
//   // sgMail.send(msg);
//   sgMail
//     .send(msg)
//     .then(() => {
//       console.log("email send success");
//     })
//     .catch((error) => console.log("!!!!!", error.message));
// };

module.exports = sendEmail;
