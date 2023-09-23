import React from "react";
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";

function UpdateUser ({ show, user, username, password, email, handleSubmit, birth, setUsername, setPassword, setEmail, setBirth }) {
    return (
        <>
        <h4>Update</h4>
        <Form className='profile-form' user={user} show={show} onSubmit={handleSubmit} >            
            <Form.Label>Username</Form.Label>
            <Form.Control 
                type= 'text'
                value={username}
                // defaultValue={user.Username}
                placeholder="Enter your new username"
                onChange={e => setUsername(e.target.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
                type= 'password'
                value={password}
                // defaultValue={user.Password}
                placeholder="Enter your new password"
                onChange={e => setPassword(e.target.value)}
            />
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
                type= 'email'
                value={email}
                // defaultValue={user.Email}
                placeholder="Enter your new email"
                onChange={e => setEmail(e.target.value)}
            />
            <Form.Label>Birthday</Form.Label>
            <Form.Control 
                type= 'date'
                value={birth}
                // defaultValue={user.Birth}
                placeholder="Enter your new birthday"
                onChange={e => setBirth(e.target.value)}
            />
            <Button variant='primary' type='submit' onSubmit={handleSubmit}>
                Update
            </Button>
        </Form>
        </>
    )
}

export default UpdateUser