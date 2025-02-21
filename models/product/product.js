const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    productTitle: {type: String, required: true},
    productPrice: {type: Number, reuired: true},
    productDescription: {type: String, required: true},
    productCategory: {type:String, required: true},
})
module.exports = mongoose.model("product", productSchema)