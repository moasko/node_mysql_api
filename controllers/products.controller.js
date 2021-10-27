const { porductsOptions } = require('../helps')
const ProductsModule = require('../models/products.models')
let product = new ProductsModule("products")

exports.getAllProducts = async(req, res) => {
    product.getAllProducts((err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })
}




//recherche de prosuit 
exports.SearchProduct = async(req, res) => {
    const toSearch = req.body.texte
    product.SearchProduct(toSearch, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })

}




//get produits bay ID
exports.getProduct = async(req, res) => {
    const id = req.params.id
    product.getProduct(id, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })
}


//insert products in database
exports.insertProduct = async(req, res) => {
    let { name, price, description, img, category_id, vendor_id, active } = req.body

    product.insertProduct({ name, price, description, img, category_id, vendor_id, active }, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })

}


// update products in database
exports.updateProduct = async(req, res) => {
    const id = req.params.id
    let { name, price, description, img, category_id, vendor_id, active } = req.body
    product.UpdatePorduct(id, { name, price, description, img, category_id, vendor_id, active }, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })
}


// delete elements
exports.deleteProduct = async(req, res) => {
    let id = req.params.id
    product.deleteProduct(id, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }

    })
}