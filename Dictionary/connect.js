var mysql= require('mysql');
var connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database:'entries',    
})

connection.connect( function(err,connect){
    if(err) throw err;
    console.log(connect);
    connection.query("select * from entries")
});
module.exports=connection;
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';