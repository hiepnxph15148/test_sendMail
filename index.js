
const express = require("express");

const app = express();
app.use(express.json());

app.post("/sendMail",async(req,res)=>{
    const { email } =req.body
    const nodemailer = require('nodemailer');
      // create reusable transporter object using the default SMTP transport
      const transporter = nodemailer.createTransport({
   service:"Gmail",
    auth: {
      user: "ngankien1111@gmail.com", // generated ethereal user
      pass: "wlwfgvzqrekfpqwj", // generated ethereal password
    },
  });

  // send mail with defined transport object
    await transporter.sendMail({
    from: "ngankien1111@gmail.com", // sender address
    to: `${email}`, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  },
  (err)=>{
    if(err){
        return res.json({
            message:"lỗi",
            err,
        });
    }
    return res.json({
        message:`đã gửi mail thành công cho tài khoản ${email}`,
    });
  }
  );
})

const POST = process.env.POST || 8080;
app.listen(POST ,console.log(`Server Run With Port ${POST}`));