// creating contact list
// Adding express
const express = require('express');
const { join } = require('path');

// adding path for views where path is inbuilt function
const path = require('path');
const port = 8080;
const app = express();
app.set('view engine','ejs');//this tell express that ejs is a view engine
app.set('views', path.join(__dirname,'views'));

// Adding http request eg:- GET
// get is callback function
app.get('/',function(req , res){
     res.end("<h1>Cool , it is running</h1>")
}) 


app.listen(port,function(err){
  if(err){
    console.log("Error occured in the server",err);
  }
  console.log("Yup! server is running on port",port);
})