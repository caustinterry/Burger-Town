var connection = require("../config/connection.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

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

    queryString += " SET ";
    queryString += objToSql(colVal);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    // UPDATE cats SET sleepy=false WHERE id = 7
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
