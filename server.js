/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name:Kush Patel Student ID: 104006218 Date: 2022-09-13
*
* Online (Cyclic) URL:
* https://nice-sock-bee.cyclic.app/
********************************************************************************/ 




var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
<<<<<<< HEAD
    res.send("Kush Pate student id: (104006218) <br /><a href='/about'>Go to the about page</a>");
=======
    res.send("Kush Patel  (104006218) <br /><a href='/about'>Go to the about page</a>");
>>>>>>> a51db4798c18f996cf9617043cfbe383b87f42ce
});

// setup another route to listen on /about
app.get("/about", function(req,res){
    res.send("<h3>About</h3>");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
