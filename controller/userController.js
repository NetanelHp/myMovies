const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  email = email.toLowerCase();
  //Check if user already exist
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already Exist" }] });
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Make avatar
    const avatar = `https://avatars.dicebear.com/api/avataaars/:${name}.svg`;

    //create User
    user = new User({
      name,
      email,
      password: hashedPassword,
      avatar,
    });

    const savedUser = await user.save();
    if (savedUser) {
      return res.status(200).send("User registered");
    }
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

exports.loginUser = async (req, res) => {
  let { email, password } = req.body;
  email = email.toLowerCase();
  //check if user exist
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Cradentials" }] });
    }
    //decode password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Cradentials" }] });
    }

    //sign JWT
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.SECRET);
    return res.status(200).json({ token });
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};

exports.authUser = async (req, res) => {
  try {
    const user = await User.findById(req.user).select("-password");
    if (!user) {
      return res.status(400).json({ errors: { msg: "No User Found" } });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).send("Server Error");
  }
};
