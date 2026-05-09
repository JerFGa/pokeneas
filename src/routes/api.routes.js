const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokenea.controller');

router.get('/pokenea', controller.getPokeneaJson);

module.exports = router;
