import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'
import './App.css';

//className is used to denote HTML class
//class is creating class
//{} inside is a javascript expression
//whenever state gets updated(onClick) render is called again, called re-rendering

class App extends Component {
  constructor(){
    //calls constructor method on component class
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    //fetching from this url
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())  //converting response to json format with javascript can understand
      .then(users => this.setState({monsters : users}) )  //taking the users from respone and set monsters to that array
  }

  handleChange = e => {
    this.setState({ searchField:e.target.value })
  }

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Roldex</h1>
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
