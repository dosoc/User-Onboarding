import React from 'react'

export default function Form(props) {
    const {values, submit, change, disable, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <label>First Name 
                <input
                type="text"
                name="first_name"
                value="first_name"
                />

            </label>
            <label>Last Name 
                <input
                type="text"
                name="last_name"
                value="first_name"
                />

            </label>
            <label>Email 
                <input
                type="email"
                name="email"
                value="first_name"
                />

            </label>
            <label>Password 
                <input
                type="password"
                name="password"
                value="first_name"
                />

            </label>
        </form>
    )
}