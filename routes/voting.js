const express = require("express");
const router = express.Router();
const Deputy = require("../models/Deputy.model");
const Party = require("../models/Party.model");
const Poll = require("../models/Voting.model");
const User = require("../models/User.model")
const axios = require("axios");
const parliamentAPI = "https://app.parlamento.pt/webutils/docs/doc.txt?path=6148523063446f764c324679626d56304c3239775a57356b595852684c3052685a47397a51574a6c636e52766379394a626d5a76636d3168773666446f32386c4d6a424359584e6c4c31684a566955794d45786c5a326c7a6247463064584a684c306c755a6d39796257466a5957394359584e6c57456c575832707a6232347564486830&fich=InformacaoBaseXIV_json.txt"


router.get("/voting", async(req, res, next) => {
    try {
        const response = await axios.get(parliamentAPI);
        const voting = response.data;
        // console.log(voting)
        const party = await Party.find().sort({ nome: 1 })
        res.render("parliament/voting", { voting, party });
    } catch (err) {
        next(err);
    }
});

router.get('/polls', (req, res, next) => {
    Poll.find().exec((err, polls) => {
        res.render('parliament/polls', { polls: polls });
    });
});

// router.post('/:pollId/vote', (req, res, next) => {
//     const choice = req.body.choice;
//     const identifier = `choices.${choice}.votes`;
//     Poll.update({ _id: req.params.pollId }, {
//         $inc: {
//             [identifier]: 1
//         }
//     }, {}, (err, numberAffected) => {
//         res.send('');
//     });
// });


router.post('/:pollId/vote', (req, res, next) => {
    const choice = req.body.choice;
    const identifier = `choices.${choice}.votes`;
    Poll.update({ _id: req.params.pollId }, {
        $inc: {
            [identifier]: 1
        }
    }, {}, (err, numberAffected) => {
        let Pusher = require('pusher');
        let pusher = new Pusher({
            appId: process.env.PUSHER_APP_ID,
            key: process.env.PUSHER_APP_KEY,
            secret: process.env.PUSHER_APP_SECRET,
            cluster: process.env.PUSHER_APP_CLUSTER
        });

        let payload = { pollId: req.params.pollId, choice: choice };
        pusher.trigger('poll-events', 'vote', payload, req.body.socketId);

        res.send('');
    });

});

router.get('/results', async(req, res) => {
    const allPolls = await Poll.find();
    allPolls.forEach((poll) => {
        poll.choices.sort((a, b) => b.votes - a.votes);
    });

    res.render('parliament/results', {
        polls: allPolls
    });
});

module.exports = router;