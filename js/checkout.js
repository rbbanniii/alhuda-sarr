const form =
document.getElementById(
"checkoutForm"
);

form.addEventListener(
"submit",
function(e){

e.preventDefault();

const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

const orderId =
"AH" +
Date.now();

const order = {

orderId,

customerName:
document.getElementById(
"customerName"
).value,

customerPhone:
document.getElementById(
"customerPhone"
).value,

customerAddress:
document.getElementById(
"customerAddress"
).value,

customerCity:
document.getElementById(
"customerCity"
).value,

customerState:
document.getElementById(
"customerState"
).value,

customerPincode:
document.getElementById(
"customerPincode"
).value,

items: cart,

status:"Pending",

date:
new Date().toLocaleString()

};

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

localStorage.removeItem("cart");

window.location.href =
`success.html?id=${orderId}`;

});