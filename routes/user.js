const express = require("express");
const router = express.Router();
const User = require("../models/User.model");


router.get("/users", (req, res) => {
    res.render("users/users-list", { layout: false, users });
});

module.exports = router;