import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap';

class Item extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            done: false
        };
    }

    render(){
        return (
            <Row className = "well col-sm-12">
                <Col xs={12} sm={8}>
                    <li className = {this.state.done ? "item_done" : ""} >{this.props.item}</li>
                </Col>
                <Col xs={12} sm={2}>
                    <Button
                        bsStyle = "success"
                        onClick = {() => {
                            this.setState({done: !this.state.done});
                        }}
                    >Done</Button>
                </Col>
                <Col xs={12} sm={2}>
                    <Button bsStyle = "danger">Remove</Button>
                </Col>
            </Row>
        )
    }


}
export default Item;