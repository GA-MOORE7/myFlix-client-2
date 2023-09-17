import React from "react";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";


function DeleteUser ({ handleDeleteUser, showModal, handleCloseModal }) {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Delete account</Modal.Title>
				</Modal.Header>
				<Modal.Body>Are you sure you want to delete your account permanantly?</Modal.Body>
				{/* <Modal.Footer>
					<Button variant="primary" onClick={handleDeleteUser}>Yes</Button>
					<Button variant="secondary" onClick={handleCloseModal}>No</Button>
				</Modal.Footer> */}
			</Modal>
    )
}

export default DeleteUser 