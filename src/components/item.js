import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import clickTodo from '../actions/remove_action'

class Item extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            done: false
        };
    }

    render(){
        return (
            <Row className = "well col-sm-12" >
                <Col xs={12} sm={8}>
                    <li className = {this.state.done ? "item_done" : ""} >{this.props.item}</li>
                </Col>
                <Col xs={12} sm={2}>
                    <Button
                        bsStyle = "success"
                        onClick = {() => {
                            this.setState({done: !this.state.done});
                        }}
                    >{!this.state.done ? "DONE" : "UNDONE"}</Button>
                </Col>
                <Col xs={12} sm={2}>
                    <Button bsStyle = "danger" onClick = {() => this.props.clickTodo(this.props.id)}>Remove</Button>
                </Col>
            </Row>
        )
    }


}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({clickTodo: clickTodo}, dispatch)
}

/*
 Si l'on avait pas utilisé bindActionCreators et donc pas actions/index on aurait pu faire plus long
 matchActionToProps = (dispatch) => ({
 clickButton(newTodo) {
 dispatch({type: 'ADD_TODO', payload: newTodo})
 }
 })
 */
export default connect(null, matchDispatchToProps)(Item)
