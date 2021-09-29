const db= require("./connect");
var mysql= require('mysql');

const getWord=(word) =>{
    let newWord= mysql.escape(word);

    var queryDB= 'select * from entries where word=${newWord}';

    return new Promise((resolve, reject)=>{
        db.query(queryDB,(err, result) =>{
            if(err) throw reject(err);
            resolve(result);
        });
    });
};

module.exports= getWord;