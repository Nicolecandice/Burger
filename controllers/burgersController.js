var express = require("express");
var router = express.Router();
var  burger = require("../models/burger.js");

router.get('/', function(req,res) {// get route index
    res.redirect("/burgers");
});

router.get("/burger", function(req, res){
     burger.all(function(burgerData) {// returns burge data
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        res.render("index", {burger_data: bugerData});
});
});

// route is posted back to index
router.post("burger/create", function(req, res) {
    // uses the request object as an input for burger.addBurger
    burger.create(req.body.burger_name, function(result) {
        // the wrapper for the the orm.js that uses MYSOL insert callback will return a log to console,
        // render back to the index with the handle 
        console.log(result);
        res.redirect("/");
    });
});

// route is put back to index
router.put("/burger/ :id", function(req, res) {
    burger.update(req.params.id, function(result) {
    // the wrapper for the the orm.js that uses MYSOL insert callback will return a log to console,
    console.log(results);
    // send back response and let page reload from .then in Ajax
    res.sendStatus(200);
    });
});

module.exports = router;