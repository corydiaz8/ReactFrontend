import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'


const LoginPage = ({ logout }) => {
    const history = useHistory();
    const [emailSent, setEmailSent] = useState(false);
    return (
        <>
        <div className="col-sm-4 mx-auto text-center form-group">
                <Form className="login-form">
                        {/*<h2 className="text-center modal-title d-flex align-items-center justify-content-center">
                            Authenticate on <img src={logo} alt=""/></h2>*/}
                        <Form.Group>
                            <Form.Label className="modal-label">Email address</Form.Label>
                            <Form.Control type="email" className="input shadow-none"
                                          placeholder="Email address"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="modal-label">Password</Form.Label>
                            <Form.Control type="password" className="input shadow-none"
                                          placeholder="Password"/>
                        </Form.Group>
                        <Button variant="btn" className="red-btn w-100" type="button" onClick={() => {logout(true); history.push('/')}}>
                            Log in
                        </Button>
                        <br/>
                        <br/>
                        <Link to="/recover">Forgot your password?</Link>
                </Form>
        </div>
        </>
    );
}

export default LoginPage;