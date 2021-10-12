import React from 'react'
import '../css/details.css'
import Like from './common/like'

const Details = ({ match: { params: { id } }, books, handleLike }) => {
    if (books.length === 0) {
        return <div className="d-flex justify-content-center mt-3">
            <h4>Books has to be fetched first</h4>
        </div>
    }

    const book = books.find(b => b.id === id)
    const {
        volumeInfo: {
            title,
            subtitle: subTitle,
            description,
            previewLink: preview,
            publishedDate,
            publisher,
            language,
            pageCount,
            industryIdentifiers,
        }
    } = book
    const authors = book.volumeInfo.authors?.join(", ")
    const thumbnailUrl = book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail
    const dateString = new Date(publishedDate).toDateString()

    return (
        <div id="container">
            <div id="image">
                <img src={thumbnailUrl} alt="" />
                <div className="d-flex justify-content-between align-items-center bg-secondary bg-opacity-10 rounded">

                    <a target="_blank" rel="noreferrer" className="btn btn-primary text-white p-1" href={preview}>Preview</a>

                    <Like target={book} handleLike={handleLike} />
                </div>
            </div>
            <div id="texts">
                <h3>{title}</h3>
                <p><i>{authors ? "by" : ""} </i>{authors}</p>
                <h5>{subTitle}</h5>
                <p>{description}</p>
                <hr />
                <div><small>{pageCount}<span>{(pageCount === 1) ? " page" : " pages"}</span></small></div>
                <div><small>Published {dateString} {publisher ? `by ${publisher}` : ""}</small></div>
                <div><small>lang : {language}</small></div>
                {
                    industryIdentifiers.map(el => {
                        const copyEl = { ...el }
                        const type = copyEl.type === "OTHER" ? "" : copyEl.type + ": "
                        const id = copyEl.identifier
                        return <div key={id}><small><b>{type}</b>{id}</small></div>
                    })
                }
            </div>
        </div>
    )
}

export default Details