const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
<<<<<<< HEAD
  username: String,
  password: String,
  cc: String,
  email: String,
  role: String //Admin, Reader, Guest, Superuser
=======
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    role: String //Admin, Reader, Guest, Superuser
>>>>>>> c92cee52eaf961177d33f3ff0be2a999c1f437a5
});

const User = model("User", userSchema);

module.exports = User;