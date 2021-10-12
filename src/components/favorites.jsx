import React from 'react'
import Book from './book'
import '../css/favorites.css'

const Favorites = ({ books, handleLike }) => {
    return (
        <div id="favorites">
            {
                books.filter(b => b.liked).map((book, i, a) => {
                    return <Book key={book.id} book={book} handleLike={handleLike} />
                })
            }
        </div>
    )
}

export default Favorites