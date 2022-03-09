const { get_connection } = require('../Connection/conn_sql');

module.exports.ejecutar_sentencia = async (req,res) => 
{
    var conn = await get_connection();

    var pool = await conn.request().query('SELECT * FROM db_inversion..persona');

    console.log(pool);
}

