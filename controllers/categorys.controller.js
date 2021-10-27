const CategoysModels = require("../models/categorys.models");
const category = new CategoysModels('category');

exports.getAllCategorys = (req, res) => {
    category.getAllCategorys((err, categirys) => {
        if (!err) {
            res.status(200).send({
                status: "succes",
                data: categirys
            })
        } else {
            res.status(404).send({
                status: 'error',
            })
        }
    })
}


exports.getCategory = (req, res) => {
    const par = req.params
    category.getCategory(par.id, (err, category) => {
        if (!err) {
            res.status(200).send({
                status: 'succes',
                data: category
            })
        } else {
            res.status(404).send({
                status: 'error'
            })
        }
    })
}

exports.insertCategory = (req, res) => {
    const params = req.body
    const name = params.name
    category.insertCategory({ name }, (err, result) => {
        if (!err) {
            res.status(200).send({
                status: 'succes',
                data: result
            })
        } else {
            res.status(404).send({
                status: 'error'
            })
        }
    })
}

exports.updateCategory = (req, res) => {
    const params = req.body
    const id = params.id
    const name = params.name
    category.updateCategory(id, { name }, (err, result) => {
        if (!err) {
            res.status(200).send({
                status: 'succes',
                data: result
            })
        } else {
            res.status(404).send({
                status: 'error'
            })
        }
    })
}


exports.deleteCategory = (req, res) => {
    const params = req.body
    const id = params.id
    category.deleteCategory(id, (err, result) => {
        if (!err) {
            res.status(200).send({
                status: 'succes',
                data: result
            })
        } else {
            res.status(404).send({
                status: 'error'
            })
        }
    })
}