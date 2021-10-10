import React from 'react'

const Like = ({ handleLike, target }) => {
    const liked = target.liked ? true : false
    return (
        <div
            className="mx-3 fs-4"
            onClick={() => { handleLike(target) }}
        >
            <i className={liked ? "fa fa-star" : "fa fa-star-o"}></i>
        </div>
    )
}

export default Like