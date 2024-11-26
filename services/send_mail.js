const nodemailer = require('nodemailer');

let testAccount,transporter,info;

const send_mail =  function sendMail(data,id,html="<a href=http://localhost:3002/verify/"){
     testAccount =  nodemailer.createTestAccount();
     transporter = nodemailer.createTransport({
     //console.log("sendmail")
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: "bette14@ethereal.email",
            pass:  "1cfF8AN5r164AmqcgX"
        }
    });

    info =  transporter.sendMail({
        from: '"Fred Foo 👻" <coleman.schultz@ethereal.email>', // sender address
        to: data.email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "hello", // plain text body
       // html: `<a href="http://localhost:3002/verify/${id}">click here to verify</a>`, // html body
        html: html, // html body

       
      });
    
}



 module.exports = {send_mail};