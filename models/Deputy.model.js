const { Schema, model } = require("mongoose");

const DeputySchema = new Schema({
    depId: Number,
    depCadId: Number,
    deputado: String,
    depGP: [{
        DadosSituacaoGP: [{
            gpId: Number,
            partido: String,
            gpDtInicio: Date,
            gpDtFim: Date
        }],
    }],
    depCPId: String,
    circulo: String,
    legDes: String,
    depSituacao: [{
        DadosSituacaoDeputado: [{
            sioDes: String,
            sioDtInicio: Date
        }],
    }],
    depNomeCompleto: String,
});

module.exports = model("Deputy", DeputySchema);