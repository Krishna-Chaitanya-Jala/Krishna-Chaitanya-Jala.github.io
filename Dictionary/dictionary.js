const express= require('express');
const app= express();
const path= require('path');
const getWord = require('./word');
const port= 8080;

app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/Dictionary")));

app.get('/dictionary.html', (req,res) =>{
    res.sendFile(path.join(__dirname, "Dictionary/dictionary.html"));
});

app.post('/', (req,res) =>{
    let {word}= req.body;
    getWord(word).then((def) =>{
        if(!def || def.length ===0) throw "Word doesn't exist, please enter a valid word";
        res.status(200).send(def);

    });
    
});

app.listen(port, ()=>{
    console.log(`Application started on ${port}`);
});