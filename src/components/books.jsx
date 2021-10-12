import React from 'react'
import Book from './book'
import '../css/books.css'

const Books = ({ books, handleLike, loading }) => {
    return (
        loading
            ?
            <div id="loading-holder">
                <div id="loader"></div>
            </div>
            : <div
                className="d-flex justify-content-center flex-wrap mt-5"
            //  align-items-end 
            >
                {
                    books.map(book => {
                        return <Book key={book.id} book={book} handleLike={handleLike} />
                    })
                }

            </div>
    )



}

export default Books