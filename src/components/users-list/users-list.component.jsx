import React from "react";
import axios from "axios";

class UsersList extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    // let component = this;
    // axios.get("https://jsonplaceholder.typicode.com/users").then(
    //   function (response) {
    //     component.setState({
    //       users: response.data,
    //     });
    //   }
    // );

    // lambdas
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => response.data)
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <ul>
        {this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
}

export default UsersList;
