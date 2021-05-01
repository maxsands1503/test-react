
import './App.css';
import React, { Component } from 'react';
import {CardList} from "./components/card-list/card-list";
import {SearchField} from "./components/search-field/search-field";

class App extends  Component {

  constructor() {
    super();
    this.state = {
        monsters: [],
        searchField: ''
    }
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(users => this.setState({monsters: users}));
}


  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters = searchField === '' ? monsters :  monsters.filter(monster => {
        return monster?.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (

        <div className='App'>
            <SearchField placeholder={'Search Monsters'} handleChange={e => this.setState({searchField: e.target.value})}></SearchField>
          <CardList monsters={filteredMonsters}>

          </CardList>
        </div>
    )
  }
}

export default App;
