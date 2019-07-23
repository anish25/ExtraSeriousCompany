//FILE NAME : incidents.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : file that routes all the incident details as per required.
const router = require('express').Router();
let Incident = require('../models/incident.model');

//Get all incidences
router.route('/all').get((req,res)=>{
   Incident.find()
       .then(incidents=>res.json(incidents))
       .catch(err=>res.status(400).json("Error:"+err));
});

//Get all incidences not closed
router.route('/').get((req,res)=>{
    Incident.find().where("status").in(["new",'dispatched','progress'])
        .then(incidents=>res.json(incidents))
        .catch(err=>res.status(400).json("Error:"+err))
});

//get by id
router.route('/:id').get((req,res)=>{
    Incident.findById(req.params.id)
        .then(incident=>res.json(incident))
        .catch(err=>res.status(400).json("Error:"+err));
});

//Add incident
router.route('/add').post((req,res)=>{
    const number = req.body.number;
    const description = req.body.description;
    const customer_name = req.body.customer_name;
    const priority = req.body.priority;
    const narrative = req.body.narrative;

    const newIncident = new Incident({number,description,customer_name,priority,narrative});
    newIncident.save()
        .then(()=>res.json('Incident added!'))
        .catch(err=>res.status(400).json("Error:"+err));
});

//Update incident
router.route('/update/:id').post((req,res)=>{
    Incident.findById(req.params.id)
        .then(exercise=>{
            if(req.body.description != null)
                exercise.description = req.body.description;
            if(req.body.priority != null)
                exercise.priority = req.body.priority;
            if(req.body.narrative != null)
                exercise.narrative = exercise.narrative + ";"+req.body.narrative;

            exercise.save()
                .then(()=>res.json("Incident updated!"))
                .catch(err=>res.status(400).json("Error updating record!"+err));
        })
        .catch(err=>res.status(400).json("Error!"+err));
});

//Delete incident
router.route('/:id').delete((req,res)=>{
    Incident.findByIdAndDelete(req.params.id)
        .then(()=>res.json("Incident deleted!"))
        .catch(err=>res.status(400).json("Error deleting record:"+err));
});
module.exports = router;