const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
    username: String,
    password: String,
    cc: String,
    email: String,
    role: String, //Admin, Reader, Guest, Superuser
    circle: {
      type: Schema.Types.ObjectId,
      ref: "Circle",
    }
});

const User = model("User", userSchema);

module.exports = User;