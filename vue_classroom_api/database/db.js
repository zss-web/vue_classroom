var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'123456789',
    port:'3306',
    database:'classroom'
});
connection.connect();

module.exports=connection;