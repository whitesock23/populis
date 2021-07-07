const { Schema, model } = require("mongoose");

const CircleSchema = new Schema({
    codigo: String,
    circulo: String,
    legislatura: String
});

module.exports = model("Circle", CircleSchema);