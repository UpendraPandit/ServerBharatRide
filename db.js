const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    
        host: 'database-do-user-14093497-0.b.db.ondigitalocean.com',
        user: 'doadmin',
        password: 'AVNS_rvg8gF7UUeFwCEtqebt',
        database:'defaultdb' ,
        port:25060,
});
mysqlConnection.connect(function (error){
    if(error)
    {
        console.log(error);
        return;
    }
    else{
        console.log('Successfully connected to the database');
    }
});
module.exports = mysqlConnection;
