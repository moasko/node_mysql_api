const products = require('./products.controller')

exports.goHome = async(req, res) => {
    res.json({
        title: 'Acceuil'
    })
}