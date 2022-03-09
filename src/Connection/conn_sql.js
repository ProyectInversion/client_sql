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

const get_connection = async () => 
{
    const connection = await sql.connect(config);
    return connection;
}

module.exports = {get_connection};

