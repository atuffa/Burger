// Require connection
let connection  = require("./connection.js");

// Helpers function for SQL Syntax
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  console.log(ob)
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        console.log(key)
      var value = ob[key];
      console.log(value)
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        // console.log(value)
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'"+value+"'";
        }
        
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // console.log(arr.toString())
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
// Object for all our SQL statement functions.
  let orm = {
    selectAll: function (tableName, cb){
        let query = `SELECT * FROM ${tableName}`;
        connection.query(query, function (err,result){
            if (err){
                throw err;
            }
            cb(result)
            // console.log(result);
        }); // End of query connection for selectAll
    },// End of selectAll function
    insertOne: function(tableName, cols, vals, cb){
        
        let query = `INSERT INTO ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`
        console.log(query);
        
        connection.query(query, vals, function(err, result){
            if (err){
                throw err;
            }
            // console.log(result);
            cb(result);
        })// End of insert query
    }, // End of query connection for insertOne 
    updateOne: function (tableName, objColVals, condition, cb){
        let query = `UPDATE ${tableName} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(query)
        connection.query(query, function(err,result){
            if (err){
                throw err
            }
            // console.log(result);
            cb(result)
        })// End of update query
    },// End of UpdateOne ()
    deleteOne: function(tableName, condtion, cb){
        let query = `DELETE ${tableName} WHERE ${condition}`;
        console.log(query)
        connection.query(query, function(err, result){
            if (err){
                throw err
            }
            console.log(result)
            cb(result)
        })
    }
  }// End Of ORM

//Export the orm object for the model 
module.exports = orm;
