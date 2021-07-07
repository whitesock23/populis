const { Schema, model } = require("mongoose");

const PartySchema = new Schema({
    sigla: String,
    nome: String,
    logo: String,
});

module.exports = model("Party", PartySchema);