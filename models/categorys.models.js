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
                sql.query(`SELECT * FROM category`, (err, result) => {
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
    getProduct(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query('SELECT * FROM category WHERE id=?', [id], (err, result) => {
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

    /**
     * 
     * @param {object{}} options 
     */
    insertCategory(options = categorysOptions) {
        try {
            new Promise((resolve, reject) => {
                sql.query('INSERT INTO category(name) VALUE', [options.name], (err, result) => {
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


    upateCategory(id, options = categorysOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`UPDATE category SET name=? WHERE id=${id}`, [options.name], (err, result) => {
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


    deleteProduct(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`DELETE FROM category WHERE id=?`, [id], (err, result) => {
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