const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");

router.get("/deputies", async (req, res) => {
    const deputies = await Deputy.find();
    res.render("deputies/deputies-list", { deputies });
  });
  
router.get("/deputies/:deputyId", async (req, res) => {
  const deputyDetail = await Deputy.findById(req.params.deputyId);
  res.render("deputies/deputy-detail", deputyDetail);
});

module.exports = router;
