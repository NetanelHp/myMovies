const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");

  //Check if there is a token
  if (!token) {
    return res.status(401).json({ errors: [{ msg: "No token, auth denied" }] });
  }

  //Verfiy token
  const decoded = jwt.verify(token, process.env.SECRET);
  if (!decoded) {
    return res
      .status(401)
      .json({ errors: [{ msg: "Verify failed, auth denied" }] });
  }

  req.user = decoded.id;
  next();
};

module.exports = auth;
