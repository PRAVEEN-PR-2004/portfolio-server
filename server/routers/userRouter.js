const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/all", async (req, res) => {
  try {
    const fetchuser = await User.find();
    res.status(200).json(fetchuser);
  } catch (error) {
    res.status(404).json(error);
  }
});
router.post("/add", async (req, res) => {
  try {
    const newuser = new User(req.body);
    const { name, about } = newuser;
    if (!name || !about) {
      res.status(400).json({ message: "Title & Desc Required" });
    }
    const savedata = await newuser.save();
    res.status(201).json(savedata);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentuser = await User.findOne({ _id: id });
    if (!currentuser) {
      res.status(400).json({ message: "user not found" });
    }
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const currentuser = await User.findOne({ _id: id });
    if (!currentuser) {
      res.status(400).json({ message: "user not found" });
    }
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Project Deleted !" });
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
