import express from "express";
 
const empathRouter = express.Router();

import { getAllEmpaths, getOneEmpath, addOneEmpath } from "../controllers/empathController.js";
 
// get a list of all the sources.
empathRouter.get("/empath", getAllEmpaths);

// get a single record by id
empathRouter.get("/empath/:id", getOneEmpath);
 
// create a new record.
empathRouter.post("/empath/add", addOneEmpath);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default empathRouter
