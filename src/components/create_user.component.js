import React,{Component} from 'react';
import axios from "axios";
// import {Link} from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username:"",
            email:"",
            password:"",
            users:[]
        }
    }
    //Track username changes
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    //Track email changes
    onChangeEmail(e){
        this.setState({
           email: e.target.value
        });
    }
    //track password changes
    onChangePassword(e){
        this.setState({
           password: e.target.value
        });
    }

    //Form submission
    onSubmit(e){
        e.preventDefault();
        const user = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        };

        console.log(user);
        axios.post("http://localhost:5000/users/add",user)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err));

        // window.location = "/";
        this.setState({
            username:"",
            email:"",
            password:""
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 m-auto">
                    <h1 className="h2 text-center">Create Account</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Name</label>
                            <input type="text" className="form-control" id="username" value={this.state.username}
                                   onChange={this.onChangeUsername}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" value={this.state.email}
                            onChange={this.onChangeEmail}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" className="form-control" id="password" value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                        </div>
                        <button className="btn btn-primary btn-lg">Register</button>
                    </form>
                </div>
            </div>
        );
    }
}