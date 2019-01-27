const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/demodaydb"
);

const userSeed = [
  {
    userName: "Nickyb",
    company: "Stephen King",
    phoineNumber: "8045245",
    password: "password",
  }
]
// db.Book
//   .remove({})
//   .then(() => db.Book.collection.insertMany(bookSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });