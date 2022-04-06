const { Router } = require('express');
const sql = require('../SQL/sql_ejecutar')

const router = Router();

router.post('/sp', sql.ejecutar_sp)

module.exports = router;