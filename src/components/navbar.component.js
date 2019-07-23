import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Incident Management System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/incidents" className="nav-link">Incidents</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/register" className="nav-link"><b>Register</b></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link"><b>Login</b></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}