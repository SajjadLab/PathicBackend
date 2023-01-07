import express from "express";
 
// router is an instance of the express router.
// We use it to define our routes.
const tgjRouter = express.Router();
 
// import controllers
import { getAllTGJ, getOneTGJ, addOneTGJ, getAnnualTGJ } from "../controllers/tgjController.js";
 
// get a list of all the records.
tgjRouter.get("/Pathic", getAllTGJ);

// get a list of all records in a year
tgjRouter.get("/Pathic/year/:id", getAnnualTGJ)
 
// get a single record by id
tgjRouter.get("/Pathic/:id", getOneTGJ);
 
// create a new record.
tgjRouter.post("/Pathic/add", addOneTGJ);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default tgjRouter
