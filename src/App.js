import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/Search/search.component';
import Scroll from './components/scroll/scroll.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters : users }))
  }

  handleChangeEvent = (event) => {
    this.setState({searchField : event.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChangeEvent}/>
        <Scroll>
          <CardList monsters={filteredMonster} />
        </Scroll>
      </div>
    );
  }
}

export default App;
