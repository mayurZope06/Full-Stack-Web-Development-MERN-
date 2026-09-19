const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let users = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/register", (req, res) => {
  users.push(req.body);
  res.send("User Registered");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});