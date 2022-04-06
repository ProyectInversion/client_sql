const sql = require("mssql");
const config = require("../Utils/config");

const connect = 
{
    user: config.USER_DB,
    password: config.PASSWORD_DB,
    server: config.SERVER_DB, 
    database: config.DEFAULT_DB,
    port: config.PORT_DB,
    options: {
        encrypt: true,
        trustServerCertificate: true
    } 
};

const get_connection = async () => 
{
    const connection = await sql.connect(connect);
    return connection;
}

//docker exec -it db_inversion /opt/mssql-tools/bin/sqlcmd -S sql_server -U sa -P bruja12345# -i /run/desktop/mnt/host/c/ejecutar.sql

module.exports = {get_connection};

