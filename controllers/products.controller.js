const sql = require('../config/DB.connect');
const ProductsModule = require('../models/products.models')

let prod = new ProductsModule("products")

exports.getAllProducts = async(req, res) => {
    try {
        prod.getAllProducts((err, products) => {
            if (err) throw err
            res.json({
                data: products
            })
            console.log(products)
        })
    } catch (e) {
        console.log(e)
    }
}




prod.searchProducts("apple", (err, data) => {
    if (err) throw err;
    console.log(data)
})


exports.getInitial = (text) => {
    return text.replace(/\s+/, ' ')
        .split(' ')
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase())
        .join('');

}


//recherche de prosuit 
exports.SearchProduct = async(req, res) => {
    try {
        const toSearch = req.body.texte
        new Promise((resolve, reject) => {
            sq.query(`SELECT * FROM products WHERE name LIKE ? `, [`%${toSearch}%`], (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result)
            })
        }).then(data => {
            res.json({ data })
        })
    } catch (e) {
        console.log(e)
    }

}




//get produits bay ID
exports.getProduct = async(req, res) => {
    try {
        const id = req.params.id
        new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM products WHERE id = ${id}`, (err, result) => {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(result)
                })
            })
            .then((response) => {
                res.json({
                    res: response
                })
            })
    } catch (e) {
        console.log(e)
    }
}


//insert products in database
exports.insertProduct = async(req, res) => {
    try {
        let { name, price, description, img, category_id, vendor_id, active } = req.params
        new Promise((resolve, reject) => {
                sql.query(`INSERT INTO products(name, price, description, img, category_id, vendor_id, active)  VALUES (?,?,?,?,?,?,?)`, [name, price, description, img, category_id, vendor_id, active], (err, result) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(result)
                })
            })
            .then(value => {
                res.json({
                    value
                })
            })
    } catch (e) {
        console.loge(e)
    }
}


// update products in database
exports.updateProduct = async(req, res) => {
    try {
        const id = req.params.id
        let { name, price, description, img, category_id, vendor_id, active } = req.body
        new Promise((resolve, reject) => {
                sql.query(`UPDATE products SET name=?, price=?, description=?, img=?, category_id=?, vendor_id=?, active=? WHERE id = ${id}`, [name, price, description, img, category_id, vendor_id, active], (err, result) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(result)
                })
            })
            .then(value => {
                res.json({
                    statut: 200,
                    message: "updated",
                    data: value
                })
            })
    } catch (e) {
        console.log(e)
    }
}


// delete elements
exports.deleteProduct = async(req, res) => {
    try {
        let id = req.params.id
        new Promise((resolve, rejecte) => {
                sql.query(`DELETE FROM products WHERE id=?`, [id], (err, result) => {
                    if (err) {
                        rejecte(new Error(err.message))
                    }
                    resolve(result)
                })
            })
            .then(data => {
                res.json({
                    statut: 200,
                    message: "deleted",
                    data: data
                })
            })
    } catch (e) {
        console.log(e)
    }
}