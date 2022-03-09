const { Router } = require('express');
const sql = require('../SQL/sql_ejecutar')

const router = Router();

router.post('/get_personas', sql.ejecutar_sentencia)

module.exports = router;