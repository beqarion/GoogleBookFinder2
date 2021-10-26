import React, { useState } from 'react'
import Joi from 'joi-browser'
import Input from './common/input'

const LoginForm = () => {
    const [account, setAccount] = useState({ username: "", password: "" })
    const [errors, setErrors] = useState({})

    const schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    }

    const validate = () => {
        const { error } = Joi.validate(account, schema, { abortEarly: false })
        if (!error) return null
        const localErrors = {}
        for (let item of error.details) {
            localErrors[item.path[0]] = item.message
        }
        return localErrors
    }
    const validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const subSchema = { [name]: schema[name] }

        const { error } = Joi.validate(obj, subSchema)
        return error ? error.details[0].message : null
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = validate()
        setErrors(errors || {})
        if (errors) return

        //call server

    }
    const handleChange = ({ currentTarget: input }) => {
        const copyErrors = { ...errors }
        const errorMessage = validateProperty(input)
        if (errorMessage) copyErrors[input.name] = errorMessage
        else delete copyErrors[input.name]

        const copyAccount = { ...account }
        copyAccount[input.name] = input.value
        setAccount(copyAccount)
        setErrors(copyErrors)
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
                    error={errors.username}
                />
                <Input
                    name="password"
                    label="Password"
                    value={account.password}
                    onChange={handleChange}
                    error={errors.password}
                />
                <button
                    className="btn btn-primary mt-3"
                    disabled={validate()}
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginForm