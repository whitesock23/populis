const { Schema, model } = require("mongoose");

const PollSchema = new Schema({
    topic: String,
    choices: [{
        value: String,
        votes: Number,
        party: {
            type: Schema.Types.ObjectId,
            ref: "Party",
        },
    }]
});

module.exports = model("Poll", PollSchema)