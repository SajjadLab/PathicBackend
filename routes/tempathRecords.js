import express from "express";
 
const tempathRouter = express.Router();

import { getAllTempaths, getOneTempath, addOneTempath } from "../controllers/tempathController.js";
 
// get a list of all the sources.
tempathRouter.get("/Tempath", getAllTempaths);

// get a single record by id
tempathRouter.get("/Tempath/:id", getOneTempath);
 
// create a new record.
tempathRouter.post("/Tempath/add", addOneTempath);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default tempathRouter
