import React from 'react'

const Books = ({ books }) => {
    return (
        <div className="d-flex justify-content-center flex-wrap mt-5">
            {books.map(book => {
                return <div style={{ minWidth: "200px", height: "200px", background: "green", margin: "2px" }}></div>
            })}
        </div>
    )
}

export default Books