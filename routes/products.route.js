const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller')

router.get('/products', productsController.getAllProducts)
router.get('/product/:id', productsController.getProduct)
router.post('/product/add', productsController.insertProduct)
router.put('/product/update/:id', productsController.updateProduct)
router.delete('/product/delete/:id', productsController.deleteProduct)

module.exports = router