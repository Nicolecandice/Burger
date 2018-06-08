// orm.js file inside config directory.
//import (require) connection.js into orm.js
var connection = require("./connection.js");

var orm = {
   all: function(tableInput, cb) {
       connection.query("SELECT * FROM "+tableInput+';', function(err, result){
           if(err) throw err;
           cb(result)

       })
   },

    update: function(tableInput,condition,cb) {
    connection.query("UPDATE " +tableInput+" SET devoured=true WHERE id=" +connection+';', function(err, result) {
        if(err)throw err;
        cb(result);
    })
},

    create: function(tableInput,val,cb){
    connection.query('INSERT INTO '+tableInput+'(burger_name)VALUES ("'+val+'");', function(err,result){
        if(err)throw err;
        cb(result);
    })
    }

}





//In the orm.js file, create the methods that will execute the necessary
// MySQL commands in the controllers. These are the methods you will need 
//to use in order to retrieve and store data in your database.
//selectAll()
//insertOne()
//updateOne()
//Export the ORM object in module.exports.
module.export = orm;