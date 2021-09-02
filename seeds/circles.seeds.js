const mongoose = require('mongoose');
const Circle = require('../models/Circle.model');

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const circles = [{
    codigo: "19",
    circulo: "AÇORES",
    legislatura: "XIV"
}, {
    codigo: "1",
    circulo: "AVEIRO",
    legislatura: "XIV"
}, {
    codigo: "2",
    circulo: "BEJA",
    legislatura: "XIV"
}, {
    codigo: "3",
    circulo: "BRAGA",
    legislatura: "XIV"
}, {
    codigo: "4",
    circulo: "BRAGANÇA",
    legislatura: "XIV"
}, {
    codigo: "5",
    circulo: "CASTELO BRANCO",
    legislatura: "XIV"
}, {
    codigo: "6",
    circulo: "COIMBRA",
    legislatura: "XIV"
}, {
    codigo: "21",
    circulo: "EUROPA",
    legislatura: "XIV"
}, {
    codigo: "7",
    circulo: "ÉVORA",
    legislatura: "XIV"
}, {
    codigo: "8",
    circulo: "FARO",
    legislatura: "XIV"
}, {
    codigo: "22",
    circulo: "FORA DA EUROPA",
    legislatura: "XIV"
}, {
    codigo: "9",
    circulo: "GUARDA",
    legislatura: "XIV"
}, {
    codigo: "10",
    circulo: "LEIRIA",
    legislatura: "XIV"
}, {
    codigo: "11",
    circulo: "LISBOA",
    legislatura: "XIV"
}, {
    codigo: "20",
    circulo: "MADEIRA",
    legislatura: "XIV"
}, {
    codigo: "12",
    circulo: "PORTALEGRE",
    legislatura: "XIV"
}, {
    codigo: "13",
    circulo: "PORTO",
    legislatura: "XIV"
}, {
    codigo: "14",
    circulo: "SANTARÉM",
    legislatura: "XIV"
}, {
    codigo: "15",
    circulo: "SETÚBAL",
    legislatura: "XIV"
}, {
    codigo: "16",
    circulo: "VIANA DO CASTELO",
    legislatura: "XIV"
}, {
    codigo: "17",
    circulo: "VILA REAL",
    legislatura: "XIV"
}, {
    codigo: "18",
    circulo: "VISEU",
    legislatura: "XIV"
}];

Circle.create(circles)
    .then(circlesFromDB => {
        console.log(`Created ${circlesFromDB.length} circles`);
        // Once created, close the DB connection
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating circles from the DB: ${err}`));
