const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful  ");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("68bc33477814576303d45432").then((res) => {
  console.log(res);
});

// User.findOneAndUpdate({ name: "Bruce" }, { age: 42 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findByIdAndUpdate({ _id: '68bc33477814576303d45433' }, { age: 18 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById({ _id: "68bc33477814576303d45433"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.insertMany([
//   { name: "Tony, email: tony@gmail.com", age: 50 },
//   { name: "peter, email: peter@gmail.com", age: 30 },
//   { name: "Bruce, email: bruce@gmail.com", age: 47 },
// ]).then((res) => {
//   console.log(res);
// });
// const user2 = new User({
//   name: "Eve",
//   email: "eve@yahoo.in",
//   age: 48,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
