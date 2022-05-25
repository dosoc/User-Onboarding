import React from 'react'

export default function User(props) {
    const { user } = props
    return (
        <div className='user container'>
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
        </div>
    )
}