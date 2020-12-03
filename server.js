const express = require('express'); // import express module.

const app = express(); //to create express server object

const ejs=require('ejs'); //to configure template engines.

const expressLayout = require('express-ejs-layouts'); //express layouts

const path= require('path')  // to configure paths

const PORT = process.env.PORT || 3000



//home page
app.get('/',(req, res)=>{
    res.render('home');
});


//set template engine

app.use(expressLayout);

app.set('views', path.join(__dirname, '/resources/views'));

app.set('view engine', 'ejs');
/*
if(process.env.PORT){
    PORT=process.env.PORT
}
else{
    PORT=3000
}
*/

app.listen(3000, ()=>{
    console.log(`Listening on port ${PORT}`);
});
