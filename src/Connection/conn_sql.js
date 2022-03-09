const sql = require("mssql");
const config = 
{
    user: 'bruja',
    password: 'AX12345',
    server: 'localhost', 
    database: 'db_inversion',
    options: {
        encrypt: true,
        trustServerCertificate: true
    } 
};

const connection = sql.connect(config, function (err) {
    if(err)
        console.log(err);
    else
        console.log("Connected");  

});

const conn = connection;

module.exports = conn;
