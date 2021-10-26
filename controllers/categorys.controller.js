const sql = require('../config/DB.connect');

exports.getAllCtegorys = async(req, res) => {
    try {
        new Promise((resolve, reject) => {
                sql.query('SELECT * FROM category', (err, result) => {
                    if (err) {
                        reject(new err.message);
                    }
                    resolve(result)
                })

            })
            .then(data => {
                res.json({
                    data: data
                })
            })


    } catch (e) {
        console.log(e)
    }
}


//get category bay ID
exports.getCategory = async(req, res) => {
    try {
        const id = req.params.id
        new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM category WHERE id = ${id}`, (err, result) => {
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


//insert category in database
exports.insertCategory = async(req, res) => {
    try {
        let { name } = req.body
        new Promise((resolve, reject) => {
                sql.query(`INSERT INTO category(name)  VALUES (?)`, [name], (err, result) => {
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


// update category in database
exports.updateCategory = async(req, res) => {
    try {
        const id = req.params.id
        let { name } = req.body
        new Promise((resolve, reject) => {
                sql.query(`UPDATE category SET  name=? WHERE id = ${id}`, [name], (err, result) => {
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
exports.deleteCategiry = async(req, res) => {
    try {
        let id = req.params.id
        new Promise((resolve, rejecte) => {
                sql.query(`DELETE FROM category WHERE id=?`, [id], (err, result) => {
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

//recherche de category
exports.searchCategory = async(req, res) => {
    try {
        let { name } = req.body
        new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM category WHERE name LIKE '%${name}%'`, (err, result) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(result)
                })
            })
            .then(data => {
                res.json({
                    statut: 200,
                    message: "search",
                    data: data
                })
            })
    } catch (e) {
        console.log(e)
    }
}

//get category by name
exports.getCategoryByName = async(req, res) => {
    try {
        let { name } = req.body
        new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM category WHERE name = '${name}'`, (err, result) => {
                    if (err) {
                        reject(new Error(err.message))
                    }
                    resolve(result)
                })
            })
            .then(data => {
                res.json({
                    statut: 200,
                    message: "search",
                    data: data
                })
            })
    } catch (e) {
        console.log(e)
    }
}