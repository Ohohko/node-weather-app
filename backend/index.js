const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const router = require ('/router');
app.use('/forcasts/',router);
app.use(express.static('public'));

app.get('/',(req,res)=>{
const d = new Date();
res.json({currentTime: d.toTimeString() })
console.log('Received a GET request');
});

app.listen(PORT,console.log(`Example app listening on port ${PORT}!`))