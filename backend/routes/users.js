//FILE NAME : user.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : file that routes all the user details as per required.

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json("Error:"+err))
});

router.route('/add').post((req,res)=>{
   const username = req.body.username;
   const email = req.body.email;
   const password = req.body.password;


   const newUser = new User({username,email,password});
   newUser.save()
       .then(()=>res.json('user added!'))
       .catch(err=>res.status(400).json("Error:"+err));
});

module.exports = router;