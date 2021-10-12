import React, { useState } from 'react'

const LoginForm = () => {
    const [account, setAccount] = useState({ username: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const copyAccount = { ...account }
        copyAccount[e.currentTarget.name] = e.currentTarget.value
        setAccount(copyAccount)
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form-control"
                        value={account.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        name="password"
                        type="text"
                        className="form-control"
                        onChange={handleChange}
                        value={account.password}
                    />
                </div>
                <button className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}

export default LoginForm