//FILE NAME : comment.model.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : its a model for comment that can be made to any incident.

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const commentSchema = new schema({
        incidentId:{
            type:String,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true
    }
);

const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;