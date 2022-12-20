const express = require("express")
const router = express.Router()
var nodemailer = require('nodemailer');


router.post("/sendMail", async (req,res)=>{
    const body = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'office.premiumspace@gmail.com',
          pass: 'cftp vtkh fagz fxul'
        }
      });
   
      var mailOptions = {
        from: 'office.premiumspace@gmail.com',
        to: 'marinalazic.premiumspace@gmail.com',
        subject: "Premiumspace office",
        html: "<b style='font-size:20px'>Pitanje:</b><br><span style='font-size:18px;'>" +body.text +"</span><br><b style='font-size:20px'>Kontakt podaci:</b><br><b style='font-size:18px'>Ime:</b><span style='font-size:16px'>" +body.firstName+ "<span><br><b style='font-size:18px'>Prezime:</b><span style='font-size:16px'>" + body.lastName + "</span><br><b style='font-size:18px'>I-mejl:</b><span style='font-size:16px'>" + body.email +"</span><br><b style='font-size:18px'>Telefon:</b><span style='font-size:16px'>" + body.phone +"</span>"
      };
    
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.json(info.response);
        }
      });

      
})

router.post("/sendMailCreditor", async (req,res)=>{
  const body = req.body;

  var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'office.premiumspace@gmail.com',
        pass: 'cftp vtkh fagz fxul'
      }
    });
 
    var mailOptions = {
      from: 'office.premiumspace@gmail.com',
      to: 'marinalazic.premiumspace@gmail.com',
      subject: "Premiumspace office - Kreditni savetnik",
      html: "<b style='font-size:20px'>Pitanje:</b><br><span style='font-size:18px;'>" +body.text +"</span><br><b style='font-size:20px'>Kontakt podaci:</b><br><b style='font-size:18px'>Ime:</b><span style='font-size:16px'>" +body.firstName+ "<span><br><b style='font-size:18px'>Prezime:</b><span style='font-size:16px'>" + body.lastName + "</span><br><b style='font-size:18px'>I-mejl:</b><span style='font-size:16px'>" + body.email +"</span><br><b style='font-size:18px'>Telefon:</b><span style='font-size:16px'>" + body.phone +"</span>"
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.json(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.json(info.response);
      }
    });

    
})




module.exports = router
