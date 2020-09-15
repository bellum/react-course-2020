import React, {Component} from 'react';
import axios from "axios";

import './App.css';

import {CardList} from "./components/card-list/card-list.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data)
      .then(users => this.setState({users}));
  }

  render() {
    return (
        <div className="App">
          <CardList users={this.state.users}/>
        </div>
    );
  }
}

export default App;
