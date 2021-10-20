const express = require('express')
const router = express.Router()
const vendorsController = require('../controllers/vendors.controller')

router.get('/vendors', vendorsController.getAllVendors)
router.get('/vendor/:id', vendorsController.getVendorById)

module.exports = router