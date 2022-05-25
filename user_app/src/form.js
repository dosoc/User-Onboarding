import React from 'react'

export default function Form(props) {
    const {values, submit, change, disable, errors} = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const realValue = type === "checkbox" ? checked : value;
        change(name, realValue)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Create a User</h2>
                <button disabled={disable}>Submit</button>
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group inputs'>
                <h4>User Information</h4>
                <label>First Name 
                    <input
                    type="text"
                    name="first_name"
                    onChange={onChange}
                    value={values.first_name}
                    />
                </label>
                <label>Last Name 
                    <input
                    type="text"
                    name="last_name"
                    onChange={onChange}
                    value={values.last_name}
                    />
                </label>
                <label>Email 
                    <input
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
                <label>Password 
                    <input
                    type="password"
                    name="password"
                    onChange={onChange}
                    value={values.password}
                    />
                </label>
                <label>Terms of Service 
                    <input
                    type="checkbox"
                    name="terms"
                    onChange={onChange}
                    checked={values.terms}
                    />
                </label>
            </div>
            
        </form>
    )
}