import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tgjRouter from "./routes/tgjRecords.js";
import blogRouter from "./routes/blogRecords.js";
import sourceRouter from "./routes/sourceRecords.js";
import tempathRouter from "./routes/tempathRecords.js";
import empathRouter from "./routes/empathRecords.js";


dotenv.config();
var _db;
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.DB;
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(tgjRouter);
app.use(blogRouter);
app.use(sourceRouter);
app.use(tempathRouter);
app.use(empathRouter);

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
