import React from "react";
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";

function UpdateUser ({ show, user, setUsername, setPassword, setEmail }) {
    return (
        <>
        <h4>Update</h4>
        <Form classname='profile-form' user={user} show={show} >            
            <Form.Label>Username</Form.Label>
            <Form.Control 
                type= 'text'
                name= 'Username'
                // defaultValue={user.Username}
                placeholder="Enter your new username"
                onChange={e => setUsername(e.target.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
                type= 'password'
                name= 'password'
                // defaultValue={user.Password}
                placeholder="Enter your new password"
                onChange={e => setPassword(e.target.value)}
            />
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
                type= 'email'
                name= 'email'
                // defaultValue={user.Email}
                placeholder="Enter your new email"
                onChange={e => setEmail(e.target.value)}
            />
            <Button variant='primary' type='submit' >
                Update
            </Button>
        </Form>
        </>
    )
}

export default UpdateUser