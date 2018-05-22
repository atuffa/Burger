// Import Dependecies required
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
let burger = require("../models/burger.js");

// create all routes and logics within it

//Get
// Index Redirect
router.get('/', function (req, res) {
    res.redirect('/index');
  });

// /index
router.get("/index", function(req, res){
    burger.selectAll(function(data){
        // console.log(data);
        let burger = {burgers:data}
        res.render("index", burger)
    });
});

//Put(Update)
router.post("/api/burgers/:id", function(req, res){
    let condition = "id =" + req.params.id;
    burger.updateOne({devoured: 1}, condition, function(result){
        // console.log(result);
        res.redirect('/index');
    }); 
});

//Post
router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger"], [req.body.burgerName], function(result){
        // console.log(result);
        res.redirect('/index');
    });
});
    
// Export routes for server.js to use.
module.exports = router;

