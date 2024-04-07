const mysql = require('mysql2')

const mysqlConnection = mysql.createConnection({
    // mysql://doadmin:AVNS_Tbd0LAzTqYn4_sZaLk-@db-mysql-nyc1-57626-do-user-14369736-0.b.db.ondigitalocean.com:25060/defaultdb?ssl-mode=REQUIRED
    
        host: 'db-mysql-blr1-51253-do-user-16275209-0.c.db.ondigitalocean.com',
        user: 'doadmin',
        password: 'AVNS_Dn6ariXVpJdp_Ltr3Fr',
        database:'defaultdb',
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
