import React from 'react'

const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor="username">{label}</label>
            <input
                id={name}
                name={name}
                type="text"
                className="form-control"
                value={value}
                onChange={onChange}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default Input