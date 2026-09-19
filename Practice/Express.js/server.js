const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/about", (Req, res) => {
  res.send("This is the about page");
});

app.get("/contact", (Req, res) => {
  res.send("This is the contact` page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);
});

app.get("/products/:id", (req, res) => {
  const productId = Number(req.params.id);

  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  const requestedProduct = products.find((product) => product.id === productId);
  res.json(requestedProduct);
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from express backend" });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
