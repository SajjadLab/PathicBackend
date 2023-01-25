import express from "express";
 
const empathRouter = express.Router();

import { getAllEmpaths, getOneEmpath, addOneEmpath } from "../controllers/empathController.js";
 
// get a list of all the sources.
empathRouter.get("/Tempath", getAllTempaths);

// get a single record by id
empathRouter.get("/Tempath/:id", getOneTempath);
 
// create a new record.
empathRouter.post("/Tempath/add", addOneTempath);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default empathRouter
