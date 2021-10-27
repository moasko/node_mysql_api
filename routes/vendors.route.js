const express = require('express')
const router = express.Router()
const vendorsController = require('../controllers/vendors.controller')

router.get('/api/vendors', vendorsController.getAllVendors);
router.get('/api/vendor/:id', vendorsController.getVendorById);
router.put('/api/vendor/:id', vendorsController.updateVendor);
router.post('/api/vendor', vendorsController.insertVendor);
router.delete('/api/vendor/:id', vendorsController.deleteVendor);

module.exports = router