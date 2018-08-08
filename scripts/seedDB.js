const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Hours collection and inserts the hours below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://legines:giveUPdaG00ds@ds115762.mlab.com:15762/heroku_gzwmv8x5"
);

const hourSeed = [
  {hours: "",
  selfA: "",
  esteem: "",
  love: "",
  synopsis: ""
}
];

db.Hour
  .remove({})
  .then(() => db.Hour.collection.insertMany(hourSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
