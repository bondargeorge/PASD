const homeButton = document.getElementById("homepage-btn");

const shelfNotificationButton = document.querySelector("#shelf-notification-btn");
const floorWorkerShelfNotification = document.querySelector('#email-shelf');
const dateShelfNotification = document.querySelector('#date-shelf');
const shelfNotificationDescription = document.querySelector('#shelf-description');

const stockNotificationButton = document.querySelector("#stock-notification-btn");
const floorWorkerStockNotification = document.querySelector('#email-stock');
const dateStockNotification = document.querySelector('#date-stock');
const stockNotificationDescription = document.querySelector('#stock-description');

const restrictedProductNotificationButton = document.querySelector("#restricted-product-notification-btn");
const floorWorkerRestrictedProductNotification = document.querySelector('#email-restricted-product');
const dateRestrictedProductNotification = document.querySelector('#date-restricted-product');
const restrictedProductNotificationDescription = document.querySelector('#restricted-product-description');


homeButton.onclick = () => {
    location.href = "/";
};

shelfNotificationButton.onclick = () => {
    floorWorkerShelfNotification.textContent = ("jdoe@rehtinksupermarket.com");
    dateShelfNotification.textContent = ("20-01-2022");
    shelfNotificationDescription.textContent = ("Shelf 3 needs to be filled with cheese!");
};

stockNotificationButton.onclick = () => {
    floorWorkerStockNotification.textContent = ("wjohnsen@rehtinksupermarket.com");
    dateStockNotification.textContent = ("20-01-2022");
    stockNotificationDescription.textContent = ("Low stock! New stock was ordered by the system.");
};

restrictedProductNotificationButton.onclick = () => {
    floorWorkerRestrictedProductNotification.textContent = ("mfreeman@rehtinksupermarket.com");
    dateRestrictedProductNotification.textContent = ("20-01-2022");
    restrictedProductNotificationDescription.textContent = ("An age restricted product is being bought at check-out number 5!");
};