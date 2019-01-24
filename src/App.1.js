import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  // Runs after the render method, updating it, so we can output the return
  componentDidMount() {
    fetch('http://localhost:50628/api/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <ul>
          {items.map(item => (
            <li key="{item.id}">
            Id: {item.id} | Name: {item.name} | Email: {item.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
