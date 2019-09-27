var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "viz2e3oeeeut58lu",
  password: "lmsz9lb5m93joid0",
  database: "cd74b2u38nzecd4c"
});

connection.connect(function(err) {
  if (err) {
    console.log("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
