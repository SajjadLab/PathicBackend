import Source from "../models/Source.js";

// Get all sources
const getAllSources = async (req, res) => {
  try {
    const sources = await Source.find({});
    res.status(200).json(sources);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// get source by id
const getOneSource = async (req, res) => {
  try {
    const source = await Source.findById(req.params.id);
    res.status(200).json(source);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// add one source
const addOneSource = async (req, res) => {
  try {
    const source = await Source.create({
        ...req.body
    });
    res.status(200).json(source);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export { getAllSources, getOneSource, addOneSource };