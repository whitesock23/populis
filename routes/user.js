const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");
const User = require("../models/User.model");
const axios = require("axios");
const parliamentAPI = "https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c31684a566955794d45786c5a326c7a6247463064584a684c306c755a6d39796257466a5957394359584e6c57456c575832707a6232347564486830&fich=InformacaoBaseXIV_json.txt"
const validID = "https://angolaapi.herokuapp.com/api/v1/validate/bi/"


router.get("/users", async(req, res) => {
    const response = await axios.get(validID);
    const users = response.data;
    console.log(users);
    // console.log(news);
    res.render("users/users-list", { layout: false, users });
});

module.exports = router;