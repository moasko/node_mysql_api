const express = require('express')
const router = express.Router()
const vendorsController = require('../controllers/vendors.controller')

router.get('/vendors', vendorsController.getAll)
router.get('/vendor/:id', vendorsController.getById)

module.exports = router