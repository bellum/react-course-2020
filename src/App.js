import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Learn React"
    };
    // Эта привязка обязательна для работы `this` в колбэке.
    this.toggleMessage = this.toggleMessage.bind(this);
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              {this.state.message}
            </a>
            <button onClick={this.toggleMessage}>Toggle Message</button>
          </header>
        </div>
    );
  }
  toggleMessage() {
    let newMessage;
    if (this.state.message === "Learn React") {
      newMessage = "Relax for a moment";
    } else {
      newMessage = "Learn React";
    }
    // forbidden to modify state directly
    // this.state.message = newMessage;
    this.setState({message: newMessage});
  }
}

export default App;
