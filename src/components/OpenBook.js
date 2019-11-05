import React, { Component } from 'react'
import './OpenBook.css'

export default class OpenBook extends Component{
    componentWillUnmount = () => {
        this.props.resetBook()
    }

    render () {
        const { bookImageRight, bookImageLeft, openBook, resetBook, shelveBook } = this.props
        const paragraph = bookImageLeft.split(" ").length

        return(
            <div className='open-book'>
                { paragraph > 1 
                ? <div className="description">
                    <p>
                    {bookImageLeft}
                    </p>
                    <div className="exit-button" onClick={shelveBook}>
                    <i 
                    
                    className="fas fa-book-dead"></i>
                    <h5>Shelve Book</h5>
                    </div>
                </div>
                : <img 
                    src={bookImageLeft}
                    onClick={resetBook}
                />
                }
                <img
                src={bookImageRight}
                alt="book-cover"    
                onClick={openBook}
                />
            </div>
        )}
}