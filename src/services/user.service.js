const { User } = require("../models");

const register = async (reqBody) => {
  return User.create(reqBody);
};

const login = async (email) => {
    return User.findOne({ email });
  };

  const getUserByEmail = async (email) => {
    return User.findOne({ email });
};

const getUserList = async () => {
  return User.find()
};

const getUserById = async(userId) => {
  return User.findById(userId);
}

const updateDetails = async(userId, updateBody) => {
  return User.findByIdAndUpdate(userId, { $set: updateBody });
}

const deleteUser = async (userId) => {
  return User.findByIdAndDelete(userId);
}

module.exports = {
  register,
  login,
  getUserList,
  getUserByEmail,
  getUserById,
  updateDetails,
  deleteUser
};