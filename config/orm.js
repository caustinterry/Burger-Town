var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
      //   res.render("index", { quotes: data });
      cb(data);
    });
  },
  insertOne: function(tableInput, tableCol, tableVal, cb) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += tableCol.toString();
    queryString += ") ";
    queryString += "VALUES (?) ";
    // INSERT INTO cats (name,sleepy) VALUES (?,?)

    console.log(queryString);
    connection.query(queryString, tableVal, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, colVal, condition, cb) {
    var queryString = "UPDATE " + tableInput;
    queryString += " SET devoured=!";
    queryString += colVal.devoured.toString();
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    console.log(colVal);
    // UPDATE cats SET sleepy=false WHERE id = 7
    connection.query(queryString, [colVal], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
