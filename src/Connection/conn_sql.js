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

//docker exec -it db_inversion /opt/mssql-tools/bin/sqlcmd -S sql_server -U sa -P bruja12345# -i /run/desktop/mnt/host/c/ejecutar.sql

module.exports = {get_connection};

