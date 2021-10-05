import React from 'react'

const Search = ({ handleChange, handleSubmit, keyword }) => {


    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={keyword}
                />
                <input
                    type="submit"
                />
            </form>
        </div>

    )
}

export default Search