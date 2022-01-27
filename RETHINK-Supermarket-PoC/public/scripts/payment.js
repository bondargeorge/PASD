const homeButton = document.getElementById("homepage-btn");
const deleteButton = document.querySelector('#delete-button');
const proceedPaymentButton = document.querySelector('#proceed-payment-btn');

homeButton.onclick = () => {
  location.href = "/";
};

proceedPaymentButton.onclick = () => {
  window.open("https://www.youtube.com/watch?v=iik25wqIuFo");
};

deleteButton.addEventListener('click', _ => {
  fetch('/payment', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'product'
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } 
    })
    .then(response => {
      if (response === 'Delete product') {
        window.location.reload(true);
      } 
    })
    .catch(console.error);
});