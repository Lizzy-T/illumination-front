import React, { Component } from 'react';
import './App.css';
import BookContainer from './BookContainer'

export default class App extends Component {
  state = {
    books: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(books => {
        this.setState({books})
      })
    }
  

  render () {
      return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Illumination.</h1>
        </header>
        <BookContainer 
          books ={this.state.books}
        />
      </div>
    )
  }
}


