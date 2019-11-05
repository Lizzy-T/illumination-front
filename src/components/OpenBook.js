import React, { Component } from 'react'

export default class OpenBook extends Component{
    componentWillUnmount = () => {
        this.props.resetBook()
    }

    render () {
        const { bookImageRight, bookImageLeft, openBook, resetBook } = this.props
        const paragraph = bookImageLeft.split(" ").length

        return(
            <div >
                { paragraph > 1 
                ? <p>{bookImageLeft}</p>
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