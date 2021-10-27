const VendorsModel = require('../models/vendors.models')
let vendors = new VendorsModel('vendors')


exports.getAllVendors = async(req, res) => {
    vendors.getAllVendors((err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }
    })
}

exports.getVendorById = async(req, res) => {
    const id = req.params.id
    vendors.getVendorById(id, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }
    })
}

exports.insertVendor = async(req, res) => {

    let { psuedo, name, phone, password, adresse, baned } = req.body
    vendors.insertVendor(psuedo, name, phone, password, adresse, baned, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }
    })

}


// update products in database
exports.updateVendor = async(req, res) => {
    let { psuedo, name, phone, password, adresse, baned } = req.body
    vendors.updateVendor(psuedo, name, phone, password, adresse, baned, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }
    })
}


// delete elements
exports.deleteVendor = async(req, res) => {
    const id = req.body.id
    vendors.deleteVendor(id, (err, data) => {
        if (!err) {
            res.json({
                statut: 200,
                message: "success",
                data: data
            })
        } else {
            res.json({
                statut: 404,
                message: "error"
            })
        }
    })
}