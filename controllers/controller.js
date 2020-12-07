const express = require("express");

const model = require("../models/model.js");

const controller = {
    all: function(req, res) {
        res.render("index", { layout: "main.handlebars" })
    }
}

module.exports = controller;