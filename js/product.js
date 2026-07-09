const params =
new URLSearchParams(window.location.search);

const productId =
parseInt(params.get("id"));

const product =
products.find(
item => item.id === productId
);

if(product){

document.getElementById(
"mainImage"
).src = product.image;

document.getElementById(
"productName"
).innerText = product.name;

document.getElementById(
"productPrice"
).innerText =
`₹ ${product.price}`;

document.getElementById(
"productFabric"
).innerText =
product.fabric;

document.getElementById(
"productColor"
).innerText =
product.color;

document.getElementById(
"productDescription"
).innerText =
product.description;

}

const thumbs =
document.querySelectorAll(".thumb");

const mainImage =
document.getElementById("mainImage");

thumbs.forEach(thumb => {

thumb.addEventListener(
"click",
() => {

mainImage.src =
thumb.src;

});

});


// product add to card



const addToCartBtn =
document.getElementById(
"addToCartBtn"
);

if(addToCartBtn && product){

addToCartBtn.addEventListener(
"click",
() => {

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(product);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert(
`${product.name} added to cart`
);

});

}

