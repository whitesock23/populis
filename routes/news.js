const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");
const axios = require("axios");
const parliamentAPI = "https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c31684a566955794d45786c5a326c7a6247463064584a684c306c755a6d39796257466a5957394359584e6c57456c575832707a6232347564486830&fich=InformacaoBaseXIV_json.txt"

//
router.get("/news", async(req, res) => {
    const response = await axios.get(parliamentAPI);
    const news = response.data;
    const gruposParl = news.Legislatura.GruposParlamentares.pt_gov_ar_objectos_GPOut
    console.log(gruposParl);
    // console.log(news);
    res.render("news", { layout: false, news });
});

// router.get("/news", async (req, res, next) => {
//   try {
//     const response = await axios.get(parliamentAPI);
//     const news = response.data;
//     console.log(news)
//     res.render("news", {layout: false, news });
//   } catch (err) {
//     next(err);
//   }
// });

//not working
router.get("/news/:newsId", async(req, res, next) => {
    try {
        const findnewsId = req.params.newsId;
        const newsDetail = await axios.get(parliamentAPI)
        const newsById = newsDetail.data;
        console.log(newsDetail.data)
            // // console.log(newsDetail)
            // console.log(newsById)
        res.render("news-detail", { layout: false, newsDetail });
    } catch (err) {
        next(err);
    }
});

module.exports = router;