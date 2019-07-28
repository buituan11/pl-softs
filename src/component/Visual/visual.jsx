import React, { Component } from 'react';
import './visual.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class Visual extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="visual container-fluid">
                    <div className="visual-title container-fluid">
                            <p>PL-Softs!</p>
                            <p>Phần mềm kế toán quản trị chuyên sâu.</p>
                    </div>
                </div>
        );
    }
}

export default Visual;
