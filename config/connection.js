const mysql = require("mysql");
let connection;

if (process.nextTick.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 8080,
        host: "localhost",
        user: "root",
        password: process.env.localpassword,
        database: "portfolio_db"
    })
}

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;