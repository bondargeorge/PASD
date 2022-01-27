const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productInformationSchema = new Schema({
    name: {
        type: String
    },
    amountInStock: {
        type: Number
    },
    ageToBuy: {
        type: Number
    },
    price: {
        type: Number
    },
    quantity: {
        type: String
    },
    ingredients: {
        type: String
    },
    expirationDate: {
        type: String
    },
    location: {
        type: String
    }
});

const deliveryInformationSchema = new Schema({
    id: {
        type: Number
    }, 
    product: {
        type: String
    },
    amount: {
        type: Number
    },
    price: {
        type: Number
    },
    placedDeliveryDate: {
        type: String
    },
    expectedDeliveryDate: {
        type: String
    }
});

const analyticsInformationSchema = new Schema({
    profitThisMonth: {
        type: Number
    },
    costThisMonth: {
        type: Number
    },
    profitLastMonth: {
        type: Number
    },
    costLastMonth: {
        type: Number
    },
    popularProducts: {
        type: [String]
    },
    unpopularProducts: {
        type: [String]
    },
    customersThisMonth: {
        type: Number
    }
});
    

const informationSchema = new Schema({
    exName: {
        type: String
    },
    productInformation: {
        type: productInformationSchema,
    },
    deliveryInformation: {
        type: deliveryInformationSchema
    },
    analyticsInformation: {
        type: analyticsInformationSchema
    }
});

module.exports = mongoose.model('Information', informationSchema);