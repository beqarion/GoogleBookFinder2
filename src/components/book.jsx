import React from 'react'
import Like from './common/like'

const Book = ({ book, handleLike }) => {
    const smallThumbnailUrl = book.volumeInfo.imageLinks?.Url
    const thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail
    const cardTitle = book.volumeInfo.title
    const authors = book.volumeInfo.authors?.join(", ")
    return (
        // <div className="card m-1 shadow-sm bg-light bg-gradient" style={{ width: " 16rem" }}>
        //     <div
        //         className="d-flex justify-content-center align-items-center p-2 bd-highlight"
        //         style={{ minHeight: "10rem" }}
        //     >
        //         <img src={smallThumbnailUrl || thumbnailUrl} alt="" />
        //     </div>
        //     <div className="card-body">
        //         <h5 className="card-title h6">{cardTitle}</h5>
        //         <p ><i className="card-text small">{authors ? "by" : ""} </i>{authors}</p>
        //         <div className="d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded p-2">
        //             <button className="btn btn-secondary text-white">Details</button>
        //             <Like target={book} handleLike={handleLike} />
        //         </div>

        //     </div>
        // </div>
        <div
            style={{ width: " 16rem", height: "20rem" }}
            className="bg-light bg-gradient m-1 shadow d-flex flex-column justify-content-center p-3"
        >
            <div className="flex-grow-3 w-100 h-100 d-flex justify-content-center align-items-center">
                <img src={smallThumbnailUrl || thumbnailUrl} alt="" />
            </div>

            <div >
                <h6>{cardTitle}</h6>
                <p><i className="small">{authors ? "by" : ""} </i>{authors}</p>
            </div>
            <div className="d-flex justify-content-between w-100">
                <button>Go</button>
                <Like target={book} handleLike={handleLike} />
            </div>

        </div>
    )
}

export default Book