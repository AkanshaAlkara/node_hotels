/*var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt','Hii' + user.username + '!\n/*', ()=>{
    console.log('file is created');
});
*/


/*
const notes = require('./notes.js');
console.log('server file is available');

var age = notes.age;
console.log(age);
*/

const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const Person = require('./Models/Person');
const MenuItem = require('./Models/MenuItem');

app.get('/', function (req, res) {
  res.send('Welcome to my Hotel.....How i can help you ? we have list of menus')
})


// app.get('/paneer',(req, res)=>{
//     res.send('sure sir,i would love to serve paneer')
// })

// app.get('/idli',(req, res)=>{
//    var customized_idli = {
//     name: 'rava idli',
//     size: '10 cm diameter',
//     is_sambhar: true,
//     is_chutney: false,
//    }
//    res.send(customized_idli)
// })

//Import the router files
const personRouter =require('./routes/personRoutes');
app.use('/person', personRouter);

//Import the router files for menuItem
const menuItemRoutes =require('./routes/menuItemRoutes');
app.use('/menuItem', menuItemRoutes);



app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})