const sql = require('../config/DB.connect');
const { categorysOptions } = require('../helps');



class CategoysModels {
    constructor(table) {
        this.table = table;
    }

    /**
     * 
     * @param {function} callback 
     */

    getAllCategorys(callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table}`, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                callback(null, data)
            })
        } catch (e) {
            console.log(e)
        }

    }

    /**
     * 
     * @param {Number} id 
     * @param {function} callback 
     */
    getCategory(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table} WHERE id=?`, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                callback(null, data)
            })
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * 
     * @param {object{}} options 
     */
    insertCategory(options = categorysOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`INSERT INTO ${this.table}(name) VALUE`, [options.name], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                callback(null, data)
            })
        } catch (e) {
            console.log(e)
        }
    }


    updateCategory(id, options = categorysOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`UPDATE ${this.table} SET name=? WHERE id=${id}`, [options.name], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result);
                })
            }).then(data => {
                callback(data)
            })
        } catch (e) {
            console.log(e)
        }

    }


    deleteCategory(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`DELETE FROM ${this.table} WHERE id=?`, [id], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                callback(data)
            })
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = CategoysModels