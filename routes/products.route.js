const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller')

router.get('/products', productsController.getAll)
router.get('/product/delete/:id', productsController.getProduct)
router.post('/product/add', productsController.insert)
router.put('/product/update/:id', productsController.update)
router.delete('/product/delete/:id', productsController.deletep)

module.exports = router