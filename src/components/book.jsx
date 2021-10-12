import React from 'react'
import { Link } from 'react-router-dom'
import Like from './common/like'
import '../css/book.css'

const Book = ({ book, handleLike }) => {
    const smallThumbnailUrl = book.volumeInfo.imageLinks?.smallThumbnail
    // const thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail
    const cardTitle = book.volumeInfo.title
    const authors = book.volumeInfo.authors?.join(", ")
    return (
        <div
            className="myCard bg-light bg-gradient m-3 d-flex flex-column justify-content-center p-3"
        >
            <div
                className="flex-grow-3 w-100 h-100 d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: `url(${smallThumbnailUrl})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
            </div>

            <div >
                <h6 className="mt-1 mb-0">{cardTitle}</h6>
                <p className="trunkateIt small mb-0 mt-1"><i>{authors ? "by" : ""} </i>{authors}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded p-2">
                <Link to={`details/${book.id}`}>
                    <button className="btn btn-secondary text-white">Details</button>
                </Link>
                <Like target={book} handleLike={handleLike} />
            </div>

        </div>
    )
}

export default Book