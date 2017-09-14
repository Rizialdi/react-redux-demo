import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import clickButton from '../actions/index'
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
            <form action="#" method = "POST">
                <input type="text"
                       value = {this.state.value}
                       placeholder="Add a todo"
                       onChange={this._onChangeHandler}
                />
                <button onClick={this._onClickHandler}>Click Me please</button>
            </form>
        )
    }
    _onClickHandler(e){
        e.preventDefault();
        this.props.clickButton(this.state.value);
        this.setState({value: ''})
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