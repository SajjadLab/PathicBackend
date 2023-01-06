// Bring in the BlogBlog entity
import BlogPost from "../models/BlogPost.js";

// Get all post records
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogPost.find({});
    res.status(200).json(blogs);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}
// get post by id
const getOneBlog = async (req, res) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    res.status(200).json(blog);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// add one post
const addOneBlog = async (req, res) => {
  try {
    const blog = await BlogPost.create({
        ...req.body
    });
    res.status(200).json(blog);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export { getAllBlogs, getOneBlog, addOneBlog };