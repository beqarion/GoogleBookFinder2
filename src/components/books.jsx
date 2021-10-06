import React from 'react'
import Book from './book'

const Books = ({ books }) => {
    return (
        <div
            className="d-flex justify-content-center align-items-end flex-wrap mt-5"
        >
            {books.map(book => {
                return <Book key={book.id} book={book} />
            })}
        </div>
    )
}

export default Books