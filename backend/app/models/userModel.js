const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "please enter your username"],
    },
    lastName: {
        type: String,
        required: [true, "please enter your lastName"],
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
    },
    password: {
        type: String,
        // required: [true, "please enter your passowrd"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
