const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb://dylandavispc:Dilldill1@ds147451.mlab.com:47451/heroku_4h0dck3x"
  // "mongodb://localhost/chuwana-prototypeDB" LOCAL CONNECTION
);

const catalogSeed = [
  {
    name: "Keyboard",
    type: "keyboards",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Monitor",
    type: "monitors",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "SSD",
    type: "memory",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Office Chair",
    type: "office",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "1Keyboard",
    type: "keyboards",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "1Monitor",
    type: "monitors",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "1SSD",
    type: "memory",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "1Office Chair",
    type: "office",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "2Keyboard",
    type: "keyboards",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "2Monitor",
    type: "monitors",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "2SSD",
    type: "memory",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "2Office Chair",
    type: "office",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "3Keyboard",
    type: "keyboards",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "3Monitor",
    type: "monitors",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "3SSD",
    type: "memory",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "3Office Chair",
    type: "office",
    catagory: "tech",
    price: 49,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

const userSeed = [
  {
    first_name: "John",
    last_name: "Doe1",
    email: "johndoe1@gmail.com",
    password: "Johndoe1!"
  },
  {
    first_name: "John",
    last_name: "Doe2",
    email: "johndoe2@gmail.com",
    password: "Johndoe1!"
  },
  {
    first_name: "John",
    last_name: "Doe3",
    email: "johndoe3@gmail.com",
    password: "Johndoe1!"
  },
  {
    first_name: "John",
    last_name: "Doe4",
    email: "johndoe4@gmail.com",
    password: "Johndoe1!"
  },
  {
    first_name: "John",
    last_name: "Doe5",
    email: "johndoe5@gmail.com",
    password: "Johndoe1!"
  }
];

db.Product.remove({})
  .then(() => db.Product.collection.insertMany(catalogSeed))
  .then(data => {
    console.log(data.result.n + " products inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
