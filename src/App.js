import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchUser('123');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div> First Name: {this.props.user && this.props.user.firstName}</div>
        <div> Last Name: {this.props.user && this.props.user.lastName}</div>

        <div> ID: {this.props.user && this.props.user.userId}</div>

      </div>
    );
  }
}

const mapState = state => {
  console.log(state);
  return ({
    user: state.user
  })
}

const mapDispatch = dispatch => {
console.log(dispatch);
  return ({
    fetchUser: dispatch.user.fetchUser
  })
}

export default connect(mapState, mapDispatch)(App)

