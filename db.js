const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    
        host: 'db-mysql-blr1-07572-do-user-13753251-0.b.db.ondigitalocean.com',
        user: 'doadmin',
        password: 'AVNS_JgHZNeDmK2QsILuiDNk',
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
