import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 m-auto">
                    <div className="jumbotron text-center">
                        <h1 className="display-4">Incident Management System</h1>
                        <p className="lead">Welcome to our platform. </p>
                        <hr className="my-4"/>
                            <p>This platform manages incidents, tracks incident status,
                                manages users. Click incidents on the navbar to view latest incidents and their statuses.</p>
                            <Link to="/incidents" className="btn btn-primary btn-lg" role="button">View Incidents</Link>
                    </div>
                </div>
            </div>
        );
    }
}