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
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    // INSERT INTO cats (name,sleepy) VALUES (?,?)
    connection.query(queryString, [tableInput, tableCol, tableVal], function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, colVal, condition) {
    var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
    // UPDATE cats SET sleepy=false WHERE id = 7
    connection.query(queryString, [tableInput, colVal, condition], function(
      err,
      result
    ) {
      if (err) throw err;
    });

    cb(result);
  }
};

module.exports = orm;
