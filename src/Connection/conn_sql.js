const sql = require("mssql");
const config = 
{
    user: 'sa',
    password: 'Ax12345678',
    server: '147.182.200.45', 
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

