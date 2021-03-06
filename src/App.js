import React, { Component } from 'react';
import './App.css';
import ListItem from './containers/listItem'
import TodoForm from './containers/todoForm'
import JumboPresent from './components/jumbo_present'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {

    render() {
        return (
            <div className="App">
                <JumboPresent />
                <TodoForm />
                <ListItem />
            </div>
        );
    }

}

/*
sur cette ligne je cree un nouveau component Kol pour ne passer quun seul element au fichier src/index.js
aussi savoir que <Provider store = {store}><App /></Provider> donne une erreur React.Children.only expected
to receive a single React element child qui est corrigee en mettant en cascade
*/
const Kol = () => (<Provider store = {store}>
                    <App />
                  </Provider>);
export default Kol;
