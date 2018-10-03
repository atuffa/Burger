// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(result){
            cb(result);
        })
    },// End of selectAll
    // cols and vals are objects
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, cb, function(result){
            cb(result);
        })
    },// End of insertOne
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, cb, function(result){
            cb(result);

        })
    },// End of updateOne
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, cb, function(result){
            cb(result);
        })
    }// End of deleteOne
}// End of obj burger

module.exports = burgers;