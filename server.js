import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tgjRouter from "./routes/tgjRecords.js";
import blogRouter from "./routes/blogRecords.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB;

app.use(tgjRouter);
app.use(blogRouter);

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
