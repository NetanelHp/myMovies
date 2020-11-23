const { check, validationResult } = require("express-validator");

exports.registerValidation = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is Not Valid").isEmail(),
  check("password", "Password must be at least 6 characters").isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

exports.loginValidation = [
  check("email", "Email is Not Valid").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
