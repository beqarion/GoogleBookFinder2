import React from 'react'

const Like = ({ liked, handleLike }) => {
    return (
        <div
            className="mx-3"
            onClick={handleLike}
        >
            <i className="fa fa-star"></i>
        </div>
    )
}

export default Like