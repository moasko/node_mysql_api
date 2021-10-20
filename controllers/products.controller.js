const sql = require('../config/DB.connect');
const crud = require('../config/crud')


exports.getAll = async(req, res) => {
    try {
        crud.getAll('products')
            .then(data => {
                res.render('admin/products/products_table', {
                    data
                })
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
                        reject(new err.message);
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


//get products length

exports.getProductsLength = async() => {
    try {

        new Promise((resolve, reject) => {
                sql.query(`SELECT COUNT FROM products`, (err, result) => {
                    if (err) {
                        reject(new Error(err.message));
                    }
                    resolve(result);
                })
            })
            .then(() => {
                res.json({
                    data: data
                })
            })
    } catch (e) {
        console.log(e)
    }
}


//insert products in database
exports.insert = async(req, res) => {
    try {
        let { name, price, description, img, category_id, vendor_id, active } = req.body
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
                    statut: 200,
                    message: "inserted",
                    data: value
                })
            })
    } catch (e) {
        console.loge(e)
    }
}


// update products in database
exports.update = async(req, res) => {
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
exports.deletep = async(req, res) => {
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