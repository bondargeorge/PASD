const homeButton = document.getElementById("homepage-btn");

const productDescriptionButton = document.querySelector('#product-description-btn');
const productDescription = document.querySelector('#productDescription');

const deliveryInformationButton = document.querySelector('#delivery-information-btn');
const deliveryInformation = document.querySelector('#deliveryInformation');

const analyticsInformationButton = document.querySelector('#analytics-information-btn');
const analyticsInformation = document.querySelector('#analyticsInformation');

homeButton.onclick = () => {
    location.href = "/";
};

productDescriptionButton.onclick = () => {
    productDescription.textContent = ("Name: Beer;\nAmount in stock: 151;\nAge to buy: 18;\nPrice: 0.90;\nQuantity: 1 bottle of 500ml;\nIngredients: water, barley malt, corn, barley, hops;\nExpirationDate: 23-01-2023;\nLocation: Row number 5;\n");
};

deliveryInformationButton.onclick = () => {
    deliveryInformation.textContent = ("ID: 1;\nProduct: 'Bread';\nAmount: 55;\nPrice: 30.00;\nDate of placing delivery: 20-01-2022;\nExpected date of delivery: 24-01-2022;\n");
};

analyticsInformationButton.onclick = () => {
    analyticsInformation.textContent = ("Profit made this month: 2000;\nCosts for this month: 1001;\nProfit of last month: 2500;\nCosts of last month: 1100;\nPopular products sold this month: coffee, chocolate milk, steak;\nUnpopular products sold this month: iced tea, cookies;\nNumber of customers this month: 200;\n");
};