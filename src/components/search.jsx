import React from 'react'

const Search = ({ handleChange, handleSubmit, keyword }) => {


    return (
        <div className="d-flex justify-content-center">
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