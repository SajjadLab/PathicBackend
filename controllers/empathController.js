import Empath from "../models/EmpathSource.js";

// Get all empath
const getAllEmpaths = async (req, res) => {
  try {
    const empaths = await Empath.find({});
    res.status(200).json(empaths);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// get empath by id
const getOneEmpath = async (req, res) => {
  try {
    const empath = await Empath.findById(req.params.id);
    res.status(200).json(empath);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

// add one empath
const addOneEmpath = async (req, res) => {
  try {
    const empath = await Empath.create({
        ...req.body
    });
    res.status(200).json(empath);
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

export { getAllEmpaths, getOneEmpath, addOneEmpath };