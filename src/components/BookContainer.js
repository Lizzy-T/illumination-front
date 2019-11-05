import React from 'react'
import "./BookContainer.css"

export default function BookContainer ({isBookShowing, showBook}) {

    return (
        <main className="book-container">
        <div className="book-card">
            <img 
            onClick={showBook}
            src="https://content.wdl.org/638/service/thumbnail/1430159564/1024x1024/1/1.jpg" 
            alt="manuscript" />
        </div>
        {
          isBookShowing
          ? <img
          src="https://content.wdl.org/2561/service/thumbnail/1403113721/1024x1024/1/1.jpg"
          alt="book-cover"
          />
          : null
        }
      </main>
    )
}