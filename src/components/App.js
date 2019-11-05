import React, { Component } from 'react';
import './App.css';
import BookContainer from './BookContainer'

class App extends Component {
  state = {
    books: [{"id": 1,
    "title": "Hours of Notre Dame",
    "spine": "https://files.slack.com/files-pri/T02MD9XTF-FQ89YP8DD/bookspine.png",
    "description": "Books of hours are collections of prayers used for private devotion.",
    "cover": "https://content.wdl.org/251/service/thumbnail/1431368524/1024x1024/1/1.jpg",
    "page1": "https://content.wdl.org/251/service/thumbnail/1431368524/1024x1024/1/33.jpg",
    "page2": "https://content.wdl.org/251/service/thumbnail/1431368524/1024x1024/1/78.jpg",
    "created_at": "2019-11-05T18:34:59.082Z",
    "updated_at": "2019-11-05T18:34:59.082Z"
    }]
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
    );}
}

export default App;
