const { userService } = require("../services");
const { createToken } = require("../middleware/auth");

/** Register user */
const register = async (req, res) => {
  // const reqBody = req.body;
  // const userExists = await userService.getUserByEmail(reqBody.email);
  // if (userExists) {
  //   throw new Error("User already craeted by this email!");
  // }

  let body = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const user = await userService.register(body);

  res.status(200).json({
    success: true,
    message: "User register successfully!",
    data: { user },
  });
};

/** Login user */
const login = async (req, res) => {
  try {
    const body = req.body;

    const user = await userService.login(body.email);

    if (!user) {
      throw Error("User not found");
    }

    if (body.password != user.password) {
      throw Error("Invalid password");
    }

    let data = {
      _id: user._id,
      role: user.role,
      email: user.email,
    };

    let token = createToken(data);
    console.log(token);

    res.cookie("token", token);

    res.status(200).json({
      success: true,
      message: "User login successfully!",
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserList = async (req, res) => {
  try {
    const userList = await userService.getUserList();

    res.status(200).json({
      success: true,
      message: "Get user list successfully!",
      data: userList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const getDetails = await userService.getUserById(req.params.userId);
    if (!getDetails) {
      throw new Error("User not found");
    }

    res.status(200).json({
      success: true,
      message: "User details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.updateDetails(userId, req.body);

    res.status(200).json({
      success: true,
      message: "User details update successfully!"
    })

  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

const deleteUser = async (req,res) => {
  try {
    const userId = req.params.userId;
    const userExists = await userService.getUserById(userId);
    if (!userExists) {
      throw new Error("User not found!");
    }

    await userService.deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "User delete successfully!"
    })

  } catch (error) {
    res.status(400).json({ success: false, message: error.message })
  }
};

module.exports = {
  register,
  login,
  getUserList,
  getUserDetails,
  updateDetails,
  deleteUser
};
