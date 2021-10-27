const sql = require('../config/DB.connect');
const { vendorsOptions } = require('../helps');

class VendorsModel {

    constructor(table) {
            this.table = table
        }
        /**
         * 
         * @param {Number} limit
         * @param {function} callback 
         */
    getAllVendors(callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`SELECT * FROM ${this.table}`, (err, result) => {
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
     * VendorsModel.getVendor(1,(err, result)=>{
     * if(err) throw err
     * return result;
     * })
     *  ```
     * @param {Number} id id du produit a recupérer
     * @param {function} callback 
     */
    getVendor(id, callback) {
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
    insertVendor(options = vendorsOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`INSERT INTO Vendors(psuedo,name,phone,password,adresse,baned) VALUES (?,?,?,?,?,?)`, [options.psuedo, options.name, options.phone, options.password, options.adresse, options.baned], (err, result) => {
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
    UpdateVendor(id, options = VendorsOptions, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`UPDATE Vendors SET psuedo=?,name=?,phone=?,password=?,adresse=?,baned=? WHERE id = ${id}`, [options.psuedo, options.name, options.phone, options.password, options.adresse, options.baned], (err, result) => {
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
     * function to delete Vendor in the database.
     * @param {Number} id 
     * @param {function} callback 
     */

    deleteVendor(id, callback) {
        try {
            new Promise((resolve, reject) => {
                sql.query(`DELETE FROM vendors WHERE id=?`, [id], (err, result) => {
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

module.exports = VendorsModel;