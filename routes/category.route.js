const express = require('express');
const router = express.Router();
const categorysController = require('../controllers/categorys.controller')

router.get('/categorys', categorysController.getAllCtegorys);
router.get('/category/:id', categorysController.getCategory);
router.post('/category/add', categorysController.insertCategory);
router.put('/category/update/:id', categorysController.updateCategory)
router.delete('/category/delete/:id', categorysController.deleteCategiry)

module.exports = router