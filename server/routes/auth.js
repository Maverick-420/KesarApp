const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const user = req.user; // passport sets this
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const encodedUser = encodeURIComponent(JSON.stringify(user));
    res.redirect(`http://localhost:5173/?token=${token}&user=${encodedUser}`);
  }
);

module.exports = router;
