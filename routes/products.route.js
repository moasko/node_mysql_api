const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller')

router.get('/api/products', productsController.getAllProducts)
router.get('/api/product/:id', productsController.getProduct)
router.post('/product/add', productsController.insertProduct)
router.put('/api/product/update/:id', productsController.updateProduct)
router.delete('/api/product/delete/:id', productsController.deleteProduct)

module.exports = router