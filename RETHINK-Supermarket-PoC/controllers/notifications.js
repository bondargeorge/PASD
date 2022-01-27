const Notification = require('../models/Notification');

exports.createShelfNotification = async function() {
    Notification.find({ scenario: 'Shelf restock' }, (err, info) => {
        if (err) return console.error(err);
        if (info) {
            console.log(info);
            console.log('This shelf notification example has already been saved to the NOTIFICATIONS collection!');
        } else {
           let shelfNotification = new Notification ({
                floorWorkerId: 1,
                email: 'jdoe@rehtinksupermarket.com',
                date: '20-01-2022',
                scenario: 'Shelf restock',
                description: 'Shelf 3 needs to be filled with cheese'
            });
            shelfNotification.save((err, notification) => {
                if (err) return console.error(err);
                console.log(notification);
            });
       }
   });
}

exports.createStockNotification = async function() {
    Notification.find({ scenario: 'Stock reorder' }, (err, info) => {
        if (err) return console.error(err);
        if (info) {
            console.log(info);
            console.log('This stock example notification has already been saved to the NOTIFICATIONS collection!');
        } else {
            let stockNotification = new Notification ({
                floorWorkerId: 2,
                email: 'wjohnsen@rehtinksupermarket.com',
                date: '20-01-2022',
                scenario: 'Stock reorder',
                description: 'Low stock! New stock was ordered by the system'
            });
            stockNotification.save((err, notification) => {
                if (err) return console.error(err);
                console.log(notification);
            });
       }
   });
}

exports.createRestrictedProductNotification = async function() {
    Notification.find({ scenario: 'Restricted product purchased' }, (err, info) => {
        if (err) return console.error(err);
        if (info) {
            console.log(info);
            console.log('This restricted product notification example has already been saved to the NOTIFICATIONS collection!');
        } else {
            let restrictedProductNotification = new Notification ({ 
                floorWorkerId: 3,
                email: 'mfreeman@rehtinksupermarket.com',
                date: '20-01-2022',
                scenario: 'Restricted product purchased',
                description: 'An age restricted product is being bought at check-out number 5'
           });
            restrictedProductNotification.save((err, notification) => {
                if (err) return console.error(err);
                console.log(notification);
            });
       }
   });
}

/*
exports.getShelfNotification = async function(shelfNotification) {
    return await Notification.find({ shelfNotification });
}

exports.getStockNotification = async function(stockNotification) {
    return await Notification.find({ stockNotification });
}

exports.getRestrictedProductNotification = async function(restrictedProduct) {
    return await Notification.find({ restrictedProduct });
}
*/