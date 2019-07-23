//FILE NAME : incident.model.js
//Author's Name : Anish Gandhi & Dharmik Patel
//Website Name:-Incident Managment Site
//File Description : Model that is used to create new incidents

import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

const IncidentRow = props=>(
    <tr>
        <td>{props.incident.description}</td>
        <td>{props.incident.customer_name}</td>
        <td>{props.incident.narrative}</td>
        <td>

            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                <Link to={"/incidents/edit/"+props.incident._id} type="button" className="btn btn-info">Edit</Link>
                <Link to={"/incidents/"+props.incident._id} type="button" className="btn btn-success">View</Link>
                <button type="button" className="btn btn-danger" onClick={()=>{props.deleteIncident(props.incident._id)}}>Delete</button>
            </div>
        </td>
    </tr>
);
export default class Incidents extends Component {
    constructor(props){
        super(props);

        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCustomerName = this.onChangeCustomerName.bind(this);
        this.onChangeNarrative = this.onChangeNarrative.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.deleteIncident = this.deleteIncident.bind(this);

        this.state = {
            description:"",
            priority:"",
            narrative:"",
            customer_name:"",
            incidents:[]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/incidents/")
            .then(res=>{
                this.setState({
                    incidents:res.data
                })
            })
            .catch(err=>console.log(err));
        console.log(this.state.incidents);
    }

    //Track description changes
    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }

    //Track email changes
    onChangeCustomerName(e){
        this.setState({
            customer_name: e.target.value
        });
    }
    //track narrative changes
    onChangeNarrative(e){
        this.setState({
            narrative: e.target.value
        });
    }

    //track priority changes
    onChangePriority(e){
        this.setState({
            priority: e.target.value
        });
    }

    //Form submission
    onSubmit(e){
        e.preventDefault();
        const incident = {
            description:this.state.description,
            customer_name:this.state.customer_name,
            narrative:this.state.narrative,
            priority:this.state.priority
        };

        console.log(incident);
        // window.location = "/";

        axios.post("http://localhost:5000/incidents/add",incident)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));

        this.setState({
            description:"",
            priority:"",
            narrative:"",
            customer_name:""
        });

        //window.location = "/incidents/";
    }

    deleteIncident(id){
        axios.delete("http://localhost:5000/incidents/"+id)
            .then(res=>console.log(res.data));

        this.setState({
            incidents: this.state.incidents.filter(el=>el._id !== id)
        });
    }
    incidentsList(){
        return this.state.incidents.map(incident=>{
           return <IncidentRow incident={incident} deleteIncident={this.deleteIncident} key={incident._id}/>
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 m-auto">
                    <h1 className="h2 text-center">Incidents
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-secondary"
                                    data-toggle="modal" data-target="#create_incident"
                            >Add</button>
                            <button type="button" className="btn btn-outline-secondary">View All</button>
                        </div>
                    </h1>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Narrative</th>
                            <th scope="col">Options</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.incidentsList()}
                        </tbody>
                    </table>
                </div>
                <div className="modal fade" id="create_incident" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <form onSubmit={this.onSubmit}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Create Incident</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label htmlFor="customer_name">Customer Name</label>
                                        <input type="text" className="form-control" id="customer_name"
                                               value={this.state.customer_name} onChange={this.onChangeCustomerName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea className="form-control" id="description" rows="3" value={this.state.description} onChange={this.onChangeDescription}>

                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Priority</label>
                                        <select className="form-control" id="exampleFormControlSelect1" value={this.state.priority} onChange={this.onChangePriority}>
                                            <option>High</option>
                                            <option>low</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="narrative">Narrative</label>
                                        <textarea className="form-control" id="narrative" rows="3"  value={this.state.narrative} onChange={this.onChangeNarrative}>

                                        </textarea>
                                    </div>

                                    </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}