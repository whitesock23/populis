const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");
// const deputyAPI = require("../config/axiosinstance")
// const axios = require('axios').default;

// router.get('/', (req, res)=>{
//   axios.get('https://raw.githubusercontent.com/centraldedados/parlamento-deputados/master/data/deputados.json')
//     .then(response=>{
//       // handle success
//       console.log(response)
//     })
// })

// https://codeforgeek.com/handle-get-post-request-express-4/

router.get("/deputies", async (req, res, next) => {
  try {
    const deputies = await Deputy.find();
    res.render("deputies/deputies-list", { deputies });
  }
  catch(err) {
    console.log(err)
  }
  });
  
router.get("/deputies/:deputyId", async (req, res) => {
  const deputyDetail = await deputyAPI.findById(req.params.deputyId);
  res.render("deputies/deputy-detail", deputyDetail);
});

module.exports = router;
