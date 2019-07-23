import React,{Component} from 'react';
// import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 m-auto">
                    <h1 className="h2 text-center">Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" id="password" name="password"/>
                        </div>
                        <button className="btn btn-info btn-lg">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}