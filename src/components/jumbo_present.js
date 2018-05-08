import React, { Component } from 'react';
import {Button, Jumbotron, Panel, Well} from 'react-bootstrap';

class JumboPresent extends Component {
    constructor(...args) {
        super(...args);

        this.state = {open : true};
    }

    render() {
        return (
            <div className="App">

                <Jumbotron>
                    <h1>ToDo App!</h1>
                    <p>Enter something Todo and commit yourself to It Dude.</p>
                </Jumbotron>
            </div>
        );
    }
}

export default JumboPresent;
