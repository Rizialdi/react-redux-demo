import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Button, Well, Col, Row, Grid} from 'react-bootstrap';
class ListItem extends Component {

    render() {
        let item = this.props.listOfTodo
                        .map((item, i) =>
                            <Grid className = "well col-sm-12">
                                <Row>
                                    <Col xs={12} sm={8}>
                                        <li key ={i}>{item}</li>
                                    </Col>
                                    <Col xs={12} sm={2}>
                                        <Button bsStyle = "success">Done</Button>
                                    </Col>
                                    <Col xs={12} sm={2}>
                                        <Button bsStyle = "danger">Remove</Button>
                                    </Col>
                                </Row>
                            </Grid>)
        return (

            <ul>
                {item}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        listOfTodo: state.listOfTodo
    }
}

export default connect(mapStateToProps, null)(ListItem);
