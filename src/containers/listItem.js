import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class ListItem extends Component {

    render() {
        let item = this.props.listOfTodo.map((item, i) => <li key ={i}>{item}</li>)
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
