@@ -2,6 +2,28 @@ const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, req.body);
    if(!user){
      return res.status(404).json({message: "User not found"});
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

const userRegistration = async (req, res) => {
  try {
    const { fullname, username, email, contactNumber, password } = req.body;


@@ -58,7 +80,34 @@ const userLogin = async (req, res) => {
  }
};

const updateUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "User update successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  userRegistration,
  userLogin,
  updateUsers,
  deleteUsers,
};