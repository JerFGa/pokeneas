const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokenea.controller');

router.get('/', controller.getPokeneaHtml);

module.exports = router;
