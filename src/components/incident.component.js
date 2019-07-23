import React,{Component} from 'react';
import axios from "axios";
// import {Link} from 'react-router-dom';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            description:'',
            narrative:'',
            priority:'',
            status:'',
            customer:'',
            comments:[]
        };

    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("http://localhost:5000/incidents/"+this.props.match.params.id)
            .then(res=>{
                this.setState({
                    description:res.data.description,
                    narrative:res.data.narrative,
                    priority:res.data.priority,
                    status:res.data.status,
                    customer:res.data.customer_name
                })
            })
            .catch(err=>console.log(err));
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8 m-auto">
                    <h1 className="h2 text-center">Incident details</h1>
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">
                            <div className="d-flex w-auto justify-content-between">
                                <h5 className="mb-1">Description: <b>{this.state.description}</b></h5><br/>
                                <small className="text-muted">Status: <span className="badge badge-info"> {this.state.status}</span></small>
                            </div>
                            <p className="mb-1">Narrative: <b>{this.state.narrative}</b></p>
                            <small className="text-muted">Priority: <span className="badge badge-success">{this.state.priority}</span></small>
                        </a>
                    </div>
<br/><br/>
                    <h4>Comments
                        <div className="btn-group btn-group-sm float-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-primary btn-sm">Add Comment</button>
                        </div>
                    </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        );
    }
}