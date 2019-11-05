import React from 'react'
import "./BookContainer.css"
import Book from "./Book"

export default function BookContainer ({books}) {

  const displayBooks = () => {
    return books.map(book => {
      return(<Book 
      book={book}
      />)
    })

  }
    return (
      <main className="book-container">
         {displayBooks()}
      </main>
    )
}