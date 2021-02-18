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
