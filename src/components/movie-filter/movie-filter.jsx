import React from 'react';
import Form from "react-bootstrap/Form";

export const MovieFilter = (props) => {
    return (
        <Form>
            <Form.Control 
                type= 'text'
                placeholder="Search by Genre or Director"
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
                style={{ width: "100%", padding: "10px" }}
            />
        </Form>
    );
};