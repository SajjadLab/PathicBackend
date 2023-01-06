const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, async () => {
  try {
    _db = await mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"))
    }
    catch(err) {
      console.log(err);
    };
  console.log("Running on port", port);
});
