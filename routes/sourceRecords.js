import express from "express";
 
const sourceRouter = express.Router();

import { getAllSources, getOneSource, addOneSource } from "../controllers/sourceController.js";
 
// get a list of all the sources.
sourceRouter.get("/Source", getAllSources);

// get a single record by id
sourceRouter.get("/Source/:id", getOneSource);
 
// create a new record.
sourceRouter.post("/Source/add", addOneSource);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default sourceRouter
