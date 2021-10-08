import React from 'react'
import Book from './book'

const Books = ({ books, handleLike }) => {
    return (
        <div
            className="d-flex justify-content-center flex-wrap mt-5"
        //  align-items-end 
        >
            {books.map(book => {
                return <Book key={book.id} book={book} handleLike={handleLike} />
            })}
        </div>
    )
}

export default Books