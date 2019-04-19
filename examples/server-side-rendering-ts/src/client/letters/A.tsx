// We simulate that "moment" is called in "A" and "B"
import React, { Component } from 'react';
import moment from 'moment'
import './A.css'

class A extends Component {
    moment() {
        return moment;
    }
    render() {
        return (
            <div>A</div>
        )
    }
} 

// We keep a reference to prevent uglify remove

export default A
