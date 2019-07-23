//FILE NAME : comments.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : file that routes all the comments and allows to add and delete new comments

const router = require('express').Router();
let Comment = require('../models/comment.model');

//Get all comments
router.route('/').get((req,res)=>{
    Comment.find()
        .then(comments=>res.json(comments))
        .catch(err=>res.status(400).json("Error:"+err))
});

//Get by id
router.route('/:id').get((req,res)=>{
    Comment.findById(req.params.id)
        .then(comment=>res.json(comment))
        .catch(err=>res.status(400).json("Error fetching comment:"+err));
});

//Get comments by incident id
router.route('/incident/:id').get((req,res)=>{
   Comment.find().where("incidentId").equals(req.params.id)
       .then(comments=>res.json(comments))
       .catch(err=>res.status(400).json("Error:"+err));
});

//add comment
router.route('/add').post((req,res)=>{
    const incidentNumber = req.body.incidentNumber;
    const comment = req.body.comment;

    const newComment = new Comment({incidentNumber,comment});
    newComment.save()
        .then(()=>res.json('Comment added!'))
        .catch(err=>res.status(400).json("Error:"+err));
});


//Delete comment
router.route('/:id').delete((req,res)=>{
    Comment.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Deleted successfully"))
        .catch(err=>res.status(400).json("Error:"+err));
});


module.exports = router;