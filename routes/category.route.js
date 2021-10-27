const express = require('express');
const router = express.Router();
const categorysController = require('../controllers/categorys.controller')

router.get('/api/categorys', categorysController.getAllCategorys);
router.get('/api/category/:id', categorysController.getCategory);
router.post('/api/category', categorysController.insertCategory);
router.put('/api/category/:id', categorysController.updateCategory);
router.delete('/api/category/:id', categorysController.deleteCategory);


module.exports = router