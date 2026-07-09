const priceFilter =
document.getElementById("priceFilter");

const priceValue =
document.getElementById("priceValue");

const grid =
document.getElementById("productsGrid");

const searchInput =
document.getElementById("searchInput");

const colorFilter =
document.getElementById("colorFilter");

const fabricFilter =
document.getElementById("fabricFilter");

const occasionFilter =
document.getElementById("occasionFilter");


const savedProducts =
JSON.parse(
localStorage.getItem("adminProducts")
) || [];

const allProducts = [
...products,
...savedProducts
];

function displayProducts(data){

grid.innerHTML = "";

if(data.length === 0){

grid.innerHTML =
"<h2>No Products Found</h2>";

return;
}

data.forEach(product => {

grid.innerHTML += `

<div class="collection-card">

<img src="${product.image}" alt="${product.name}">

<div class="collection-content">

<h3>${product.name}</h3>

<p class="collection-price">
₹${product.price}
</p>

<a href="product.html?id=${product.id}">
<button>View Product</button>
</a>

</div>

</div>

`;

});

}

function filterProducts(){

const maxPrice =
parseInt(priceFilter.value);

const searchValue =
searchInput.value.toLowerCase();

const colorValue =
colorFilter.value;

const fabricValue =
fabricFilter.value;

const occasionValue =
occasionFilter.value;

const filtered =
allProducts.filter(product => {

const matchesSearch =
product.name.toLowerCase()
.includes(searchValue);

const matchesColor =
colorValue === "all" ||
product.color.includes(colorValue);

const matchesFabric =
fabricValue === "all" ||
product.fabric.includes(fabricValue);

const matchesOccasion =
occasionValue === "all" ||
product.occasion === occasionValue;

const matchesPrice =
product.price <= maxPrice;

return (
matchesSearch &&
matchesColor &&
matchesFabric &&
matchesOccasion &&
matchesPrice
);

});
console.log("Original Products:", products);
console.log("Admin Products:", savedProducts);
console.log("All Products:", allProducts);


displayProducts(filtered);

}

searchInput.addEventListener(
"input",
filterProducts
);

colorFilter.addEventListener(
"change",
filterProducts
);

fabricFilter.addEventListener(
"change",
filterProducts
);

occasionFilter.addEventListener(
"change",
filterProducts
);

priceFilter.addEventListener(
"input",
()=>{

priceValue.innerText =
`₹${priceFilter.value}`;

filterProducts();

});

displayProducts(allProducts);