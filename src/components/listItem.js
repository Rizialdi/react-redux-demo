import React, { Component } from 'react';



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

export default ListItem;
