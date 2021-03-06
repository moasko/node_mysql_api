const sql = require('../config/DB.connect');
const { porductsOptions } = require('../helps');


class ProductsModel {
    constructor(table) {
        this.table = table;
    }


    /**
     * 
     * @param {Number} limit
     * @param {function} callback 
     */
    getAllProducts(callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table} WHERE active=true`, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then((data) => {
                setTimeout(() => {
                    callback(null, data)
                }, 2000);

            })
        } catch (e) {
            console.log(e)
        }
    }


    /**
     * function pour recuperer un produit dans la base de données avec le ID.
     * ```js
     * ProductsModel.getProduct(1,(err, result)=>{
     * if(err) throw err
     * return result;
     * })
     *  ```
     * @param {Number} id id du produit a recupérer
     * @param {function} callback 
     */
    getProduct(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table} WHERE id = ${id}`, (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                setTimeout(() => {
                    callback(null, data)
                }, 2000);
            })
        } catch (e) {
            console.log(e)
        }
    }


    /**
     * 
     * @param {object{}} options 
     * @param {function} callback 
     */
    insertProduct(options = porductsOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`INSERT INTO ${this.table}(name,price,description,img,category_id,vendor_id,active) VALUES (?,?,?,?,?,?,?)`, [options.name, options.price, options.description, options.img, options.category_id, options.vendor_id, options.active], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                setTimeout(() => {
                    callback(null, data)
                }, 2000);
            })
        } catch (e) {
            console.log(e)
        }
    }

    /**
     * 
     * @param {number} id 
     * @param {object{}} options 
     * @param {function} callback 
     */
    UpdatePorduct(id, options = porductsOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`UPDATE ${this.table} SET name=?, price=?, description=?, img=?, category_id=?, vendor_id=?, active=? WHERE id = ${id}`, [options.name, options.price, options.description, options.img, options.cateory_id, options.vendor_id, options.ative], (err, result) => {
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
     * @param {string} toSearch le nom du produit a rechercher
     * @param {function} callback 
     */
    searchProducts(toSearch, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table} WHERE name LIKE ? `, [`%${toSearch}%`], (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result)
                })
            }).then(data => {
                callback(null, data)
            })
        } catch (e) {

        }
    }

    /**
     * function to delete product in the database.
     * @param {Number} id 
     * @param {function} callback 
     */

    deleteProduct(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`DELETE FROM ${this.table} WHERE id=?`, [id], (err, result) => {
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
}

module.exports = ProductsModel