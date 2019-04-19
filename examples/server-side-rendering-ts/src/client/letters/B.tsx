// We simulate that "moment" is called in "A" and "B"
// import moment from 'moment'
import React, { Component } from 'react';
import moment from 'moment'

class B extends Component {
    moment() {
        return moment;
    }
    render() {
        return (
            <div>B</div>
        )
    }
} 

// We keep a reference to prevent uglify remove
// B.moment = moment

export default B
