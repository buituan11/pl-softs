import React, { Component } from 'react';
import './nomatch.css';

class NoMatch extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.scroll(0, 0);
    }
    render() {
        return (
        	<div className="no-match">
            	<h1>PAGE NOT FOUND</h1>
            </div>
        );
    }
}

export default NoMatch;
