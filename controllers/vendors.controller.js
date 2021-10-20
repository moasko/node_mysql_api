const sql = require('../config/DB.connect')
const crud = require('../config/crud')

exports.getAllVendors = async(req, res) => {
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

exports.getVendorById = async(req, res) => {
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

exports.insertVendor = async(req, res) => {
    try {
        let { psuedo, name, phone, password, adresse, baned } = req.body
        new Promise((resolve, reject) => {
            sql.query('INSERT INTO vendors(psuedo,name,phone,password,adresse,baned) VALUE(?,?,?,?,?,?)', [psuedo, name, phone, password, adresse, baned], (err, result) => {
                if (err) {
                    reject(new Error(err.message))
                }
                resolve(result)
            })
        }).then((data) => {
            data
        })
    } catch (e) {
        console.log(e)
    }

}


// update products in database
exports.updateVendor = async(req, res) => {
    try {
        let { psuedo, name, phone, password, adresse, baned } = req.body
        new Promise((resolve, reject) => {
            sql.query('UPDATE vendors SET psuedo=?,name=?,phone=?,password=?,adresse=?,baned=? WHERE id=?', [psuedo, name, phone, password, adresse, baned, req.params.id], (err, result) => {
                if (err) {
                    reject(new Error(err.message))
                }
                resolve(result)
            })
        }).then((data) => {
            res.json({
                data
            })
        })
    } catch (e) {
        console.log(e)
    }
}


// delete elements
exports.deleteVendor = async(req, res) => {
    try {
        new Promise((resolve, reject) => {
            sql.query('DELETE FROM vendors WHERE id=?', [req.params.id], (err, result) => {
                if (err) {
                    reject(new Error(err.message))
                }
                resolve(result)
            })
        }).then((data) => {
            data
        })
    } catch (e) {
        console.log(e)
    }
}

//recherche de prosuit 
exports.searchVendor = async(req, res) => {
    try {
        let { name } = req.body
        new Promise((resolve, reject) => {
            sql.query('SELECT * FROM vendors WHERE name LIKE ?', ['%' + name + '%'], (err, result) => {
                if (err) {
                    reject(new Error(err.message))
                }
                resolve(result)
            })
        }).then((data) => {
            data
        })
    } catch (e) {
        console.log(e)
    }
}