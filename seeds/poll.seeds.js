const mongoose = require('mongoose');
const Poll = require('../models/Voting.model.js');


const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://ironhack:admin@cluster0.1avs1.mongodb.net/populis?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const topics = [
    "Eleição da Assembleia da República?",
];

// empty the collection first
Poll.remove({})
    .then(() => {
        let polls = [];
        for (let i = 0; i < 5; i++) {
            polls.push({
                topic: topics[i],
                choices: [{
                        value: "Yes",
                        votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "No",
                        votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "I really don't care",
                        votes: Math.round(Math.random() * 20)
                    }
                ]
            });
        }
        return Poll.create(polls);
    })
    .then(() => {
        process.exit();
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });