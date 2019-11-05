import React, { Component } from "react"

import OpenBook from "./OpenBook"
import './Book.css'

export default class Book extends Component{
    state = {
        isBookShowing: false,
        bookImageLeft: '',
        bookImageRight: ''

    }

    openBook = () => {
        this.setState(
            {bookImageLeft: this.props.book.page1,
            bookImageRight: this.props.book.page2})
    }

    
    componentDidMount = () => {
        const { description, cover } = this.props.book
        this.setState(
            {bookImageRight: cover,
            bookImageLeft: description}
        )
    }

    showBook = () => {
        this.setState({isBookShowing: !this.state.isBookShowing})
    }

    resetBook = () => {
        const { description, cover } = this.props.book
        this.setState(
            {bookImageRight: cover,
            bookImageLeft: description}
        )
    }

    render(){
        const { isBookShowing, bookImageLeft, bookImageRight } = this.state
        const { title, spine, description, cover, page1, page2 } = this.props.book
        return(
            <div className="book-card">
                <h6>{title}</h6>
                <img 
                    onClick={this.showBook}
                    src={spine}
                    alt="manuscript" 
                />
                {
                    isBookShowing
                    ? 
                    <OpenBook
                        resetBook={this.resetBook}
                        bookImageLeft={bookImageLeft}
                        bookImageRight={bookImageRight}
                        openBook={this.openBook}
                    />
                    : null
                }
            </div>
        )
    }
}