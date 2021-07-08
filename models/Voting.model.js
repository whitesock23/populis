const { Schema, model } = require("mongoose");

const PollSchema = new Schema({
    topic: String,
    choices: [{
        value: String,
        votes: Number
    }]
});

module.exports = model("Poll", PollSchema)