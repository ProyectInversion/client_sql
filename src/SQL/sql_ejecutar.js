const sql = require('mssql')
const { get_connection } = require('../Connection/conn_sql');

const ejecutar_sentencia = async (req,res) => 
{
    var query = { mesage: '', status:true, result:null };
    try 
    {
        var conn = await get_connection();

        var pool = await conn.request().query(req.body.consulta);

        query.result = pool.recordset;    
    } catch (error) 
    {
        query.mesage = error;
        query.status = false;
    }
    res.json(query);
}

const ejecutar_sp = async (req,res) => 
{
    var query = { message: '', status:true, result:null };
    try 
    {
        var conn = await get_connection();

        var pool = await conn.request();
        
        req.body.parameters_in.forEach((e) => pool.input(e.parameter, e.value))
        req.body.parameters_out.forEach((e) => pool.output(e.parameter))
        
        let res = await pool.execute(req.body.name_sp);

        let out = res.output;
        let tabla = res.recordsets.length > 0 ? res.recordsets : res.recordset;
        query.result = { out, tabla }
    } catch (error) 
    {
        console.log(error);
        query.message = error;
        query.status = false;
    }
    res.json(query);
}

module.exports = 
{
    ejecutar_sentencia,
    ejecutar_sp
}