const products = require('../models/products.models')

const pro = new products('products')
let produc;

pro.getAllProducts((err, product) => {
    if (err) throw err;
    produc = product
})



exports.goHome = async(req, res) => {
    res.json({
        title: 'Acceuil',
        products: produc
    })
}