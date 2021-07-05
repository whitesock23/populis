const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");
const axios = require("axios");
const parliamentAPI = "https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c31684a566955794d45786c5a326c7a6247463064584a684c306c755a6d39796257466a5957394359584e6c57456c575832707a6232347564486830&fich=InformacaoBaseXIV_json.txt"

//API Working === Hip Hip hurray
// router.get("/deputies", async(req, res) => {
//     const response = await axios.get(deputiesAPI);
//     const deputies = response.data;
//     console.log(deputies);
//     res.render("deputies/deputies-list", { deputies });
// });

router.get("/deputies", async(req, res) => {
    const response = await axios.get(parliamentAPI);
    const deputies = response.data;
    console.log(deputies);
    res.render("deputies/deputies-list", { deputies });
});

// router.get("/deputies", async (req, res, next) => {
//   try {
//     const deputies = await axios.get(deputiesAPI)
//     console.log(deputies)
//     res.render("deputies/deputies-list", { deputies });
//   }
//   catch(err) {
//     console.log(err)
//     next(err);
//   }
//   });


// router.get("/deputies/:deputyId", async (req, res) => {
//   const deputyDetail = await deputyAPI.findById(req.params.deputyId);
//   res.render("deputies/deputy-detail", deputyDetail);
// });

module.exports = router;