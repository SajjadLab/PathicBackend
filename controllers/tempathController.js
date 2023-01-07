import Tempath from "../models/Tempath.js";

// Get all Tempath
const getAllTempaths = async (req, res) => {
  try {
    const tempaths = await Tempath.find({});
    res.status(200).json(tempaths);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// get Tempath by id
const getOneTempath = async (req, res) => {
  try {
    const tempath = await Tempath.findById(req.params.id);
    res.status(200).json(tempath);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// add one Tempath
const addOneTempath = async (req, res) => {
  try {
    const tempath = await Tempath.create({
        ...req.body
    });
    res.status(200).json(tempath);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export { getAllTempaths, getOneTempath, addOneTempath };