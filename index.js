// creating contact list
// Adding express
const express = require('express');

// adding path for views where path is inbuilt function
//for folder as property we need path
const path = require('path');
const port = 8080;
const app = express();
// app.set pass new property with their value
// __dirname this give the path where my current directory is working
app.set('view engine','ejs');//this tell express that ejs is a view engine
app.set('views', path.join(__dirname,'views'));// it will lookout view folder in __dirname directory

//creating parser for parse our data
app.use(express.urlencoded());

// accessing static file using middleware
app.use(express.static('assets'));//it will find out folder 'assets' from our directory
var contactList=[
  {
    name : "rakesh",
    phone : "8910429999"
  },
  {
    name : "ramesh",
    phone : "8910429999"
  },
  {
    name : "rajesh",
    phone : "8910429999"
  },
  {
    name : "rupesh",
    phone : "8910429999"
  }
  
]
//sending data to the server
app.get('/practice',function(req, res){
  return res.render('practice',{
    title: "Lets play with ejs"
  });
})

// Adding http request eg:- GET
// get is callback function
app.get('/',function(req , res){
    //  res.end("<h1>Cool , it is running</h1>")
    return res.render('home',{
      title : "Contact List",
      contact_list : contactList
    });
}) 

app.post('/create-contact', function(req, res){
  contactList.push(req.body); 
  return res.redirect('/');
})

app.listen(port,function(err){
  if(err){
    console.log("Error occured in the server",err);
  }
  console.log("Yup! server is running on port",port);
})

//query and string parameter
// deleting query
app.get('/delete-contact/:phone', function(req, res){
  console.log(req.query);
  let phone = req.query.phone

  let contactindex = contactList.findIndex(contact =>
    contact.phone == phone);
    if(contactindex != -1){
      contactList.slice(contactindex,1);
    }
    return res.redirect('back');
});















