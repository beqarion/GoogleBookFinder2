import React, { useState } from 'react'
import Input from './common/input'

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
                <Input
                    name="username"
                    label="Login"
                    value={account.username}
                    onChange={handleChange}
                />
                <Input
                    name="password"
                    label="Password"
                    value={account.password}
                    onChange={handleChange}
                />
                <button className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}

export default LoginForm