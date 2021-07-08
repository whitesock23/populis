const router = require("express").Router();


/* GET home page */
router.get("/info", (req, res) => {
    res.render("info");
});


module.exports = router;