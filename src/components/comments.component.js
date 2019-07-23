import React,{Component} from 'react';
// import {Link} from 'react-router-dom';

export default class Comments extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-8 m-auto">
                    <h1 className="h2">Comments</h1>
                    <ul className="list-group">
                        <li className="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
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