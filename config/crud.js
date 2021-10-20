const sql = require('./DB.connect')

exports.getAll = async(table) => {
    let promise = new Promise((resolve, rejects) => {
        sql.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) {
                rejects(new Error(err.message))
            }
            resolve(result)
        })

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

exports.insert = async(table, values = null) => {
    let copy = Object.assign({}, value)
    let promise = new Promise((resolve, rejecte) => {
        sql.query(`INSERT INTO ${table} VALUES (${values})`, (err, result) => {
            if (err) rejecte(new Error(err.message))
            resolve(result)
        })
    })

    return promise
}