import React, { Component } from 'react';
import {connect} from 'react-redux'
import Item from '../components/item'


class ListItem extends Component {
    render() {

        let item = this.props.listOfTodo
                        .map((item) => <Item key = {item.id} item = {item.newTodo} id = {item.id} />)
        return (
            <ul>
                {item}
            </ul>
        );
    }
}
/*Cette fronction permet de recuperer dans le store les proprietes dont jai besoin
Ici je renvoi la liste de taches qui sera scannee une par une et affichee dans le
 component <Item /> */
function mapStateToProps(state) {
    return {
        listOfTodo: state.listOfTodo
    }
}

export default connect(mapStateToProps, null)(ListItem);
