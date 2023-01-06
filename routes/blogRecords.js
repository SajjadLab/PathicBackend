import express from "express";
 
// router is an instance of the express router.
// We use it to define our routes.
const blogRouter = express.Router();
 
// import controllers
import { getAllBlogs, getOneBlog, addOneBlog } from "../controllers/blogController.js";

 
// get a list of all the records.
blogRouter.get("/Blog", getAllBlogs);
 
// get a single record by id
blogRouter.get("/Blog/:id", getOneBlog);
 
// create a new record.
blogRouter.post("/Blog/add", addOneBlog);
 
// update a record by id.
//router.route("/update/:id").post();
 
// delete a record
//router.route("/:id").delete();
 
export default blogRouter
