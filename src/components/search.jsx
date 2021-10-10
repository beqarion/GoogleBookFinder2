import React from 'react'
import '../css/search.css'

const Search = ({ handleChange, handleSubmit, keyword }) => {


    return (
        <div className="search-box d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={keyword}
                    autoFocus
                />
                <input
                    type="submit"
                    className="mx-1"
                />
            </form>
        </div>

    )
}

export default Search