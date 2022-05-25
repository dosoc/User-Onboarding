import React from 'react'

export default function User(props) {
    if (!props) {
        return <h3>Working fetching User Data</h3>
    }
    return (
        <div className='user container'>
            <h2>{props.first_name} {props.last_name}</h2>
            <p>{props.email}</p>
        </div>
    )
}