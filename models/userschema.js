const bceypt = require("bcryptjs");

"use strict";
module.exports = function(sequelize, DataTypes) {
    let users = sequelize.define("users", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {               
            }
        }
    });

    users.generateHash = function(password) {
        return bcrypt.hashSync(passwprd, bcrypt.genSalySync(9), null)
    }
    users.validatePassword = function(userProvidedPassword, databasePassword) {
        return bcrypt.compareSync(userProvidedPassword, databasePassword)
    }
    
    return users;
    
    };