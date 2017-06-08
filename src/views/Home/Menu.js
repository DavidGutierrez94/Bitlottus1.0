import React, { Component } from 'react';


class Menu extends Component {
    render() {
        return (
            <div className="col-md-3">
                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
            </div>
        );
    }
}


