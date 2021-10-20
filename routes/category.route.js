const express = require('express');
const router = express.Router();
const categorysController = require('../controllers/categorys.controller')

router.get('/categorys', categorysController.getAll)
router.get('/category/:id', categorysController.getCategory)
router.post('/category', categorysController.insert)
router.put('/category/:id', categorysController.update)
router.delete('/category/:id', categorysController.deletep)

module.exports = router