const Information = require('../models/Information');

exports.createProductInformation = async function() {
     Information.find({ exName: 'First example' }, (err, info) => {
         if (err) return console.error(err);
         if (info) {
             console.log(info);
             console.log('This example information has already been saved to the INFORMATION collection!');
         } else {
            let information = new Information ({
                id: {
                    id: 'First example'
                },
                productInformation: {
                    name: 'Beer',
                    amountInStock: 151,
                    ageToBuy: 18,
                    price: 0.90,
                    quantity: '1 bottle of 500ml',
                    ingredients: 'water, barley malt, corn, barley, hops',
                    expirationDate: '23-01-2023',
                    location: 'Row number 5'
                },
                deliveryInformation: {
                    id: 1,
                    product: 'Bread',
                    amount: 55,
                    price: 30.00,
                    placedDeliveryDate: '20-01-2022',
                    expectedDeliveryDate: '24-01-2022'
                },
                analyticsInformation: {
                    profitThisMonth: 2000,
                    costThisMonth: 1001,
                    profitLastMonth: 2500,
                    costLastMonth: 1100,
                    popularProducts: ['coffee', 'chocolate milk', 'steak'],
                    unpopularProducts: ['iced tea', 'cookies'],
                    customersThisMonth: 200
                }
            });
            information.save((err, info) => {
                if (err) return console.error(err);
                console.log(info);
            });
        }
    });
}

/*
exports.getProductInformation = async function() {
    return await Information.findOne({ 
        name: 'Beer'
     });
}

exports.createAnalyticsInformation = async function(analyticsInformation) {
    return await Information.create({ analyticsInformation });
}

exports.getAnalyticsInformation = async function(analyticsInformation) {
    return await Information.find({ analyticsInformation });
}

exports.createDeliveryInformation = async function() {
    Information.find({ product: 'Bread' }, (err, deliveryInformation) => {
        if (err) return console.error(err);
        if (deliveryInformation) {
            console.log('This delivery information has already been saved to the INFORMATION collection!');
        } else {
            let deliveryInfo = new Information ({
                deliveryInformation: {
                    id: 1,
                    product: 'Bread',
                    amount: 55,
                    price: 30.00,
                    placedDeliveryDate: '20-01-2022',
                    expectedDeliveryDate: '24-01-2022'
                }
            });
            deliveryInfo.save((err, deliveryInformation) => {
                if (err) return console.error(err);
                console.log(deliveryInformation);
            });
        }
    });
}

exports.getDeliveryInformation = async function() {
    return await Information.findOne({ 
        id: 1
     });
}
*/