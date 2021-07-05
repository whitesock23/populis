const router = require("express").Router();
const User = require("../models/User.model");
const axios = require("axios");
let IdValidator= "https://angolaapi.herokuapp.com/api/v1/validate/bi/"

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

 router.post("/validateCC", async (req,res)=>{
  const {cc} = req.body;

  try {
      IdValidator = `https://angolaapi.herokuapp.com/api/v1/validate/bi/${cc}`
      const responseFromApi = await axios.get(IdValidator);
      res.redirect("/signup")
      //const deputies = response.data;
      
  } catch (e) {
      //console.log(e);
      res.render("index", { errorMessage: "Please add a valid ID" });
    return;
  }    
}); 

module.exports = router;
