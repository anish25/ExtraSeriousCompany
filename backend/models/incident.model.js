//FILE NAME : incident.model.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : Model that is used to create new incidents


const mongoose = require("mongoose");
const schema = mongoose.Schema;
const incidentSchema = new schema({
        number:{
            type:String,
            default:(new Date()).getTime()
        },
        description:{
            type:String,
            required:true,
        },
        customer_name:{
            type:String,
            required:true
        },
        priority:{
            type:String,
            required:true
        },
        narrative:{
            type:String,
            required:true
        },
        status:{
            type:String,
            default:"new"
        }

    },
    {
        timestamps:true
    }
);

const Incident = mongoose.model('Incident',incidentSchema);
module.exports = Incident;