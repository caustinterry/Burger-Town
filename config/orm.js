var connection = require("../config/connection.js");

var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(error, data) {
      if (err) {
        return res.status(500).end();
      }
      res.render("index", { quotes: data });
    });
  },
  insertOne: function(tableInput, tableCol, tableVal) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, tableCol, tableVal], function(
      error,
      data
    ) {
      if (err) throw err;
    });
  },
  updateOne: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(error, data) {
      if (err) throw err;
    });
  }
};

module.exports = orm;
