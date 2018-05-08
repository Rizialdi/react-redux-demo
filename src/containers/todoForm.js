import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Button, FormControl, Col, Row} from 'react-bootstrap';
import clickButton from '../actions/index'
import uuid from 'uuid'
import '../App.css'

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            value: ""
        };
        this._onChangeHandler = this._onChangeHandler.bind(this);
        this._onClickHandler = this._onClickHandler.bind(this);
    }
    render(){
        return(
            <form action="#" method = "POST" >
                <div className="center-form">
                    <Row >
                        <Col xs={9} >
                        <FormControl
                            type="text"
                            value = {this.state.value}
                            placeholder="Add a todo"
                            onChange={this._onChangeHandler}
                        />
                        </Col>
                        <Col xs={3} >
                        <Button
                            bsStyle = "primary"
                            type="submit"
                            onClick={this._onClickHandler}
                            className = "invi"
                        >Add Item</Button>
                        </Col>
                    </Row>
                </div>
            </form>
        )
    }
    _onClickHandler(e){
        e.preventDefault();
        if(!this.state.value){
            alert("Veuillez remplir la tache");
            return false
        }
        let id = uuid.v4();
        this.props.clickButton(this.state.value, id);
        this.setState({value: ''});
    }

    _onChangeHandler(e){
        const {value} = e.target;
        this.setState({value})
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({clickButton: clickButton}, dispatch)
}

/*
Si l'on avait pas utilisé bindActionCreators et donc pas actions/index on aurait pu faire plus long
matchActionToProps = (dispatch) => ({
 clickButton(newTodo) {
    dispatch({type: 'ADD_TODO', payload: newTodo})
 }
})
*/
export default connect(null, matchDispatchToProps)(TodoForm)