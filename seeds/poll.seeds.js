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
        for (let i = 0; i < 1; i++) {
            polls.push({
                topic: topics[i],
                choices: [{
                        value: "Partido Socialista",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Partido Social Democrata",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Bloco De Esquerda",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Partido Comunista Português",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Centro Democrático Social - Partido Popular",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Pessoas-Animais-Natureza",
                        // votes: Math.round(Math.random() * 20)
                    }, {
                        value: "Partido Ecologista 'Os Verdes'",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "PCTP-MRPP",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Chega",
                        // votes: Math.round(Math.random() * 20)
                    }, {
                        value: "Iniciativa Liberal",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Livre",
                        // votes: Math.round(Math.random() * 20)
                    },
                    {
                        value: "Partido Ecologista Os Verdes",
                        // votes: Math.round(Math.random() * 20)
                    }, {
                        value: "Ergue-te",
                        // votes: Math.round(Math.random() * 20)
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