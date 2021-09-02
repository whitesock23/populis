const mongoose = require('mongoose');
const Party = require('../models/Party.model');

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const parties = [{
    sigla: "PS",
    nome: "Partido Socialista",
    logo: "https://www.cne.pt/sites/default/files/partido4_0.png"
}, {
    sigla: "PSD",
    nome: "Partido Social Democrata",
    logo: "https://www.cne.pt/sites/default/files/partido3_1.png"
}, {
    sigla: "BE",
    nome: "Bloco De Esquerda",
    logo: "https://www.cne.pt/sites/default/files/partido14_0.png"
}, {
    sigla: "PCP",
    nome: "Partido Comunista Português",
    logo: "https://www.cne.pt/sites/default/files/partido1_0.png"
}, {
    sigla: "CDS-PP",
    nome: "Centro Democrático Social - Partido Popular",
    logo: "https://www.cne.pt/sites/default/files/partido2_0.png"
}, {
    sigla: "PAN",
    nome: "Pessoas-Animais-Natureza",
    logo: "https://www.cne.pt/sites/default/files/pan_2014.jpg"
}, {
    sigla: "PEV",
    nome: "Partido Ecologista \"Os Verdes\"",
    logo: "https://www.cne.pt/sites/default/files/partido10_0.png"
}, {
    sigla: "CH",
    nome: "Chega",
    logo: "https://www.cne.pt/sites/default/files/partido_chega.png"
}, {
    sigla: "IL",
    nome: "Iniciativa Liberal",
    logo: "https://www.cne.pt/sites/default/files/partido_liberal.png"
}, {
    sigla: "L",
    nome: "Livre",
    logo: "https://www.cne.pt/sites/default/files/livre.png"
}, {
    sigla: "PPM",
    nome: "Partido Popular Monárquico",
    logo: "https://www.cne.pt/sites/default/files/partido6_0.png"
}, {
    sigla: "PCTP-MRPP",
    nome: "Partido Comunista dos Trabalhadores Portugueses",
    logo: "https://www.cne.pt/sites/default/files/partido5_0.png"
}, {
    sigla: "PEV",
    nome: "Partido Ecologista Os Verdes",
    logo: "https://www.cne.pt/sites/default/files/partido10_0.png"
}, {
    sigla: "Ergue-te",
    nome: "Ergue-te",
    logo: "https://www.cne.pt/sites/default/files/partido_ergete.png"
}];

Party.create(parties)
    .then(partiesFromDB => {
        console.log(`Created ${partiesFromDB.length} parties`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating parties from the DB: ${err}`));
