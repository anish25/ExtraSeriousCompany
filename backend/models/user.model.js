const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:5,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:10,
    },
    type:{
        type:String,
        minlength:4,
        default:"user"
    }
},
    {
        timestamps:true,
    }
);

const User = mongoose.model("User",userSchema);
module.exports = User;