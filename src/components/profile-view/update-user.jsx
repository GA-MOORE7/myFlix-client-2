import React from "react";

function UpdateUser ({ show, user, setUsername, setPassword, setEmail }) {
    return (
        <form classname='profile-form' user={user} show={show} >
            <h2>Want to Change Some Info?</h2>
            <label>Username</label>
            <input 
                type= 'text'
                name= 'Username'
                defaultValue={user.Username}
                onChange={e => setUsername(e.target.value)}
            />
            <label>Password</label>
            <input 
                type= 'password'
                name= 'password'
                defaultValue={user.Password}
                onChange={e => setPassword(e.target.value)}
            />
            <label>Email Address</label>
            <input 
                type= 'email'
                name= 'email'
                defaultValue={user.Email}
                onChange={e => setEmail(e.target.value)}
            />
            <button variant='primary' type='submit' >
                Update
            </button>
        </form>
    )
}

export default UpdateUser