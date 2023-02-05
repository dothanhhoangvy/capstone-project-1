const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const User = Schema({
    username:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
});

module.exports = mongoose.model("Users", User);