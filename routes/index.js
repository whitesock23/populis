const router = require("express").Router();
const User = require("../models/User.model");
const axios = require("axios");
let IdValidator = "https://angolaapi.herokuapp.com/api/v1/validate/bi/"


/* GET home page */
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/index2", (req, res) => {
    res.render("index2", { layout: false });
});

router.get("/menu", (req, res) => {
    res.render("menu");
});


module.exports = router;