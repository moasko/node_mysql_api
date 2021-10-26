const sql = require('./DB.connect')

exports.getAll = async(table, callback) => {
    let promise = new Promise((resolve, rejects) => {
        sql.query(`SELECT * FROM ${table} WHERE active=1 `, (err, result) => {
            if (err) {
                rejects(new Error(err.message))
            }
            resolve(result)
        })

    }).then((value) => {
        callback(value)
    })
    return promise
}




exports.contes = () => {
    sql.query(`SELECT COUNT(*) FROM products`, (err, result) => {
        return result
    })
}

exports.getByid = async(table, id) => {
    let promise = new Promise((resolve, rejecte) => {
        sql.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, result) => {
            if (err) rejecte(new Error(err.message))
            resolve(result)
        })
    })

    return promise
}



/*  */