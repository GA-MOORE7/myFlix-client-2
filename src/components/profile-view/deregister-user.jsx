import React from "react";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";


function DeleteUser ({ handleCloseDeregister, deregister }) {
    return (
        <Modal show={deregister} onHide={handleCloseDeregister}>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Deregister</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Do you want to delete your account?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDeregister}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={DeleteUser}>
                        Delete account
                    </Button>
                </Modal.Footer>
            </Modal>
    )
}

export default DeleteUser 