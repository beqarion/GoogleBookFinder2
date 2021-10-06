import React from 'react'
import Like from './common/like'

const Book = ({ book, liked }) => {
    const smallThumbnail = book.volumeInfo.imageLinks?.smallThumbnail
    const cardTitle = book.volumeInfo.title
    const authors = book.volumeInfo.authors?.join(", ")
    return (
        <div className="card m-1 shadow-sm bg-light bg-gradient" style={{ width: " 16rem" }}>
            <div className="d-flex justify-content-center p-2 bd-highlight">
                <img src={smallThumbnail} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title h6">{cardTitle}</h5>
                <p ><i className="card-text small">{authors ? "by" : ""} </i>{authors}</p>
                <div className="d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded p-2">
                    <button className="btn btn-secondary text-white">Details</button>
                    <Like liked={liked} />
                </div>

            </div>
        </div>
    )
}

export default Book