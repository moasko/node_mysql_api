const express = require('express');
const router = express.Router();
const home = require('../controllers/home.controller')

router.get('/', home.goHome)

module.exports = router