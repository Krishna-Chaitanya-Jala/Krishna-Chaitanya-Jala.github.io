const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const path = require('path')
const methods = require('./calMod');

app.use(express.static(__dirname+ '\\public'));
app.use(express .urlencoded({extended:true}));

app.get('', function (req,res,next) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/calculate', function (req, res) {
    methods.cal(null,res, req.query);
});

app.listen(3000, function (req, res) {
    console.log("server started at port 3000");
})