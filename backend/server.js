//FILE NAME : server.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : used to make connection to mongodb and locol server.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});


//>>>Model routers
const userRouter = require('./routes/users');
const incidentRouter = require('./routes/incidents');
const commentRouter = require('./routes/comments');

app.use('/users',userRouter);
app.use('/incidents',incidentRouter);
app.use('/comments',commentRouter);

//<<<<<<model routers

app.listen(port,()=>{
    console.log(`Server is running on port: ${port} `);
});
