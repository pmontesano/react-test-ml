import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import UserList from './UserList';
import componentWithLayout from './Layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {fetchedUsers: null}
  }
  render() {
    const users = [
      {id: 1, name: 'Pablo', age: 35},
      {id: 1, name: 'Lucas', age: 23},
      {id: 1, name: 'Fer', age: 34}
    ];
    return (
      <div className="App">
        <Header title="intro react" color="red" />
        <UserList users={this.state.fetchedUsers} />
      </div>
    );
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({fetchedUsers: json}));
  }
}

export default componentWithLayout(App);
