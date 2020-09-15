import React, {Component} from 'react';
import axios from "axios";

import './App.css';

import {CardList} from "./components/card-list/card-list.component";
import {Search} from "./components/search/search.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filteredUsers: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data)
      .then(users => this.setState({users, filteredUsers: users}));
  }

  render() {
    return (
        <div className="App">
          <h1 className="AppTitle">Monsters Rolodex</h1>
          <Search onSearch={this.onSearch} />
          <CardList users={this.state.filteredUsers}/>
        </div>
    );
  }

  onSearch = (event) => {
    let searchTerm = event.target.value.trim();
    this.setState({
      filteredUsers: this.state.users.filter(user => user.name.includes(searchTerm)),
    });
  };
}

export default App;
