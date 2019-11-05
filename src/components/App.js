import React, { Component } from 'react';
import './App.css';
import BookContainer from './BookContainer'

class App extends Component {
  state= {
    isBookShowing: false
  }

  showBook = () => {
    this.setState({isBookShowing: !this.state.isBookShowing})
  }

  render () {
    const { isBookShowing }  = this.state
      return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Illumination.</h1>
        </header>
        <BookContainer 
          isBookShowing={isBookShowing}
          showBook={this.showBook}
        />
      </div>
    );}
}

export default App;
