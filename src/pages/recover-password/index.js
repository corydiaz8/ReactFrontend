import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const RecoverPassword = () => {
    const [emailSent, setEmailSent] = useState(false);
    return (
        <>
        <div className="col-sm-4 mx-auto text-center form-group">
            <h1 className="general-title">Reset Password</h1>
            {emailSent && 
            <>
                <p>Check your email inbox for the next steps.</p>
                <Link to="/recover" onClick={() => setEmailSent(false)}>Try a different email</Link>
            </>
            }
            {!emailSent && 
            <Form className="login-form">
            <p>We'll send you a link to your email address.</p>
                <Form.Group>
                    <Form.Label className="modal-label">Email address</Form.Label>
                    <Form.Control size="sm" type="email" className="input shadow-none"
                                    placeholder="Email address"/>
                </Form.Group>
                <Button variant="btn" className="red-btn" type="button" onClick={() => setEmailSent(true)}>
                    Recover Password
                </Button>
                {/*<br/>
                <br/>
                <Link to="/free-business-invitation">Signup</Link> or <Link to="/login">Login</Link>*/}
            </Form>}
        </div>
        </>
    );
}

export default RecoverPassword;