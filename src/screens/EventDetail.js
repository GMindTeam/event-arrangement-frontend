import React, { Component } from 'react';

import axios from 'axios';

class EventDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventid: props.match.params.eventID
        }
        axios.get('https://jsonplaceholder.typicode.com/users/'+ this.state.eventid).then((response) => {
            this.setState({
                name: response.data.name,
                email: response.data.email,
                phone: response.data.phone
            })
        });
    }

    render() {

        return (
            <div>
                <h2>Event Name: {this.state.name}</h2>
                <h2>Host Name: {this.state.email}</h2>
                <h2>Event Description: {this.state.phone}</h2>
            </div>
        );
    }
}

export default EventDetail;
