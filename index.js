const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    color: "red",
    finalPrice: "",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    color: "blue",
    finalPrice: "",
  },
  {
    id: 3,
    name: "Product 3",
    price: 500,
    color: "green",
    finalPrice: "",
  },
];

for (let i = 0; i < products.length; i++) {
  products[i].finalPrice = products[i].price * 1.2;
  console.log(`${products[i].name} - ${products[i].finalPrice} `);
}

let finalPrice = 1000;

while (finalPrice < 10000) {
  console.log("finalPrice", finalPrice = finalPrice * 1.2);
}
