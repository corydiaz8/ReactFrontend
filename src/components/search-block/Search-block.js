import React from 'react';
import {Form,Button} from 'react-bootstrap'
import './Search-block.css';

 const SearchBlock = () => {
    return (
        <Form className="position-absolute w-100 search-block">
                    <Form.Group>
                        <Form.Control type="text" className="input shadow-none h-100" placeholder="First name"/>
                    </Form.Group>
                <Form.Group>
                    <Form.Control type="text" className="input shadow-none  h-100" placeholder="Last name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="email" className="input shadow-none  h-100" placeholder="Email"/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="tel" className="input shadow-none  h-100" placeholder="+1 (850) 4444 312"/>
                </Form.Group>
                <Button variant="link" className="text-decoration-none shadow-none settings" type="submit">
                    Add Customer
                </Button>
        </Form>
    )
}

export default SearchBlock