const sql = require('../config/DB.connect')
const crud = require('../config/crud')

exports.getAll = async(req, res) => {
    try {
        new Promise((resolves, rejected) => {
            sql.query('SELECT * FROM vendors', (err, result) => {
                if (err) {
                    rejected(new Error(err.message))
                }
                resolves(result)
            })
        })

        .then(data => {
            res.json({
                data
            })
        })
    } catch (e) {
        console.log(e)
    }
}

exports.getById = async(req, res) => {
    const id = req.params.id
    try {
        crud.getByid('vendors', id)
            .then(data => {
                res.json({
                    data
                })
            })
    } catch (e) {
        console.log(e)
    }
}

exports.insert = async(req, res) => {
    let { name, price, description, img, category_id, vendor_id, active } = req.body
}