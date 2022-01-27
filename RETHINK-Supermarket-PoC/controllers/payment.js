const Payment = require('../models/Payment');

exports.getProduct = async function() {
    return await Payment.find();
};

exports.createProduct = async function(product) {
    return await Payment.create({ product });
};

exports.deleteProduct = async function() {
    return await Payment.deleteOne({ 
        name: "product"
    });
};