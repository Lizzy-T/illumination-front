import React, { Component } from "react"

export default class Book extends Component{
    state = {
        isBookShowing: false
    }


    showBook = () => {
        this.setState({isBookShowing: !this.state.isBookShowing})
      }

    render(){
        const { isBookShowing } = this.state
        const { title, spine, description, cover, page1, page2 } = this.props.book
        return(
            <div className="book-card">
                <img 
                    onClick={this.showBook}
                    src={spine}
                    alt="manuscript" 
                />
                {
                    isBookShowing
                    ? <img
                    src="https://content.wdl.org/2561/service/thumbnail/1403113721/1024x1024/1/1.jpg"
                    alt="book-cover"
                    
                    />
                    : null
                }
            </div>
        )
    }
}