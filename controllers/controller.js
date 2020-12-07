const express = require("express");
const passport = require("passport");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const model = require("../models/model.js");
const transporter = require("../config/transporter.js");
const router = express.Router();

const upload = multer({ dest: path.join(__dirname, "/public/images") });

function isLoggedIn(req, res, next) {
    let loginCheckAction;
    if (req.isAuthenticated()) {
        loginCheckAction = next();
    } else {
        loginCheckAction = res.redirect("/");
    }
    return loginCheckAction;
}

function sendAutomaticEmail(mailOptions) {
    transporter.sendMail(mailOptions, (error, indo) => {
        if (error) {
            console.log(error, info);
        }
    });
}

function checkAdminStatus(req, payload) {
    if(req.user) {
        payload.dynamicData.administrator = true;
    }
    return payload;
}



router.get("/", (req, res) => {
    res.redirect("/index");
})

router.get("/index", (req, res) => {
    res.render("index", { layout: "main.handlebars" })
})

// const controller = {
//     all: function(req, res) {
//         res.render("index", { layout: "main.handlebars" })
//     }
// }

module.exports = router;