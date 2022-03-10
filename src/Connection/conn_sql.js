const sql = require("mssql");
const config = 
{
    user: 'sa',
    password: 'bruja12345#',
    server: 'sql_server', 
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

