import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './components/listItem'

class App extends Component {
    constructor(){
        super();
        this.state =
            {
            listOfTodo: [],
            value: ""
            };
        this._onClickHandler = this._onClickHandler.bind(this);
        this._onChangeHandler = this._onChangeHandler.bind(this);
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Todo App</h2>
        </div>
        <p className="App-intro">
          Veuilllez entrer les taches a faire et effacer les une fois completes
        </p>
          <form action="#" method = "POST">
              <input type="text"
                     value = {this.state.value}
                     placeholder="Add a todo"
                     onChange={this._onChangeHandler}
              />
              <button onClick={this._onClickHandler}>Click Me please</button>
          </form>
          <ListItem listOfTodo = {this.state.listOfTodo} />
      </div>
    );
  }

    _onClickHandler(e){
      e.preventDefault();
        let listOfTodo = [this.state.value, ...this.state.listOfTodo];
        this.setState({value: "", listOfTodo});
    }

    _onChangeHandler(e){
        const {value} = e.target;
        this.setState({value})
    }
}

export default App;
