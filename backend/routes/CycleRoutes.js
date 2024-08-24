const express = require('express');
const { addCycle, getCycles } = require('../controllers/CycleController');
const router = express.Router();

router.post('/add-cycle', addCycle);
router.get('/get-cycles/:uid', getCycles);

module.exports = router;
