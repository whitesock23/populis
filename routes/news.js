const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");

router.get("/news", (req, res) => {
      res.render("news");
    });

module.exports = router;
