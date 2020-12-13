const express = require('express');
const passport = require('passport');
const multer = require('multer');
const fs = require('fs');
const aws = require('aws-sdk');
const path = require('path');
const models = require('../models');
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const router = express.Router();
const sequelizeConnection = models.sequelize;
const dotenv = require('dotenv').config()





// ==================================
// =====GET routes to load pages=====
// ==================================
router.get('/', (req, res) => {
  res.redirect('/index');
});

router.get('/index', (req, res) => {
  res.render('index', { layout: 'main' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio', { layout: "main" });
});

router.get('/contact', (req, res) => {

  res.render('contact', { layout: 'main' });
});

router.get('/aboutMe', (req, res) => {
  res.render('aboutMe', { layout: 'main' })
})


// router.post("/email", (req, res) => {
//   const smtpTrans = nodemailer.createTransport({
//     service: 'Mailgun',
//     auth: {
//       user: process.env.mailgun_username,
//       pass: process.env.mailgun_password
//     }
//   });
//   const mailOpts = {
//     from: req.body.formEmail, // This is ignored by Gmail
//     to: process.env.myEmail,
//     subject: 'New Message from portolio contact page',
//     text: `${req.body.formName} (${req.body.formEmail}) says: ${req.body.formMessage}`
//   };
//   console.log(mailOpts);
//   mailgun.messages().send(data, function (error, body) {
//     console.log(body);
//   });
// });

router.post("/email", (req, res) => {
  const auth = {
    auth: {
      apiKey: process.env.mg_API,
      domain: 'davidstinnett.info'
    }
  }
  const nodemailerMailgun = nodemailer.createTransport(mg(auth));
  nodemailerMailgun.sendMail({
    from: 'david@davidstinnett.info',
    to: 'davidstinnett34@gmail.com', // An array if you have multiple recipients.
    subject: 'Message from davidstinnett.info',
    text: `${req.body.name} \n (${req.body.email}) \n says: ${req.body.text}`
  }, (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    }
    else {
      console.log(`Response: ${info.response}`);
    }
  });
});




module.exports = router;
