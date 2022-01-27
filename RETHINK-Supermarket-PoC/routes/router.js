const InformationController = require('../controllers/information');
const NotificationsController = require('../controllers/notifications');
const PaymentController = require('../controllers/payment');

const express = require('express');
const router = express.Router();

router.get("/", async(req, res) => {
    res.render('homepage.ejs');
});

router.get("/notification", async(req, res) => {
    await NotificationsController.createShelfNotification();
    await NotificationsController.createStockNotification();
    await NotificationsController.createRestrictedProductNotification();
    res.render('notifications.ejs');
});

router.get("/information", async(req, res) => {
    await InformationController.createProductInformation();
    res.render('information.ejs');
    //await InformationController.createDeliveryInformation();
    //productInformation = await InformationController.getProductInformation();
    
});

router.get("/payment", async(req, res) => {
    products = await PaymentController.getProduct();
    res.render('payment.ejs', products);
});

router.post("/payment", async(req, res) => {
    const {product} = req.body;
    await PaymentController.createProduct(product);
    res.redirect('/payment');
});

router.delete("/payment", async(req, res) => {
    let productDelete = await PaymentController.deleteProduct();
    if (productDelete.deletedCount > 0) {
        res.json('Delete product');
    }
});

module.exports = router; 