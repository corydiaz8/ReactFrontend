import React, {useState} from 'react';
import {Modal, Button, Form} from 'react-bootstrap'
import {Router, Link} from 'react-router-dom'
import './Login-modal.css';
import hubspotLogo from '../../assets/images/logo/hubspot-logo.svg';
import Logo from '../../assets/images/logo/momnpophub-logo.svg';

import logo from './../../assets/images/logo/hubspot-logo.svg'


const LoginModal = ({ show, disabled, handleShow, handleClose, handleLogin, setDisabled }) => {
    let downloadIcon = disabled ? (<i className="icon-check-circle check-circle"/>) : null;
    let downloadBtn = disabled ? (<Button variant="link"
                                      className="download-btn text-decoration-none shadow-none d-flex align-items-center justify-content-center"
                                      onClick={handleShow}>
        <i className=" icon-check-circle check-circle"/>
        <i className="icon-download"/>
    </Button>) : null;

    return (
        <>
            {/*<div className="d-flex justify-content-between">
                <Button variant="link"
                        disabled={disabled}
                        className="connect-btn text-decoration-none shadow-none d-flex align-items-center justify-content-center"
                        onClick={handleShow}>
                    {downloadIcon}
                    Connect <img src={hubspotLogo} alt=""/>
                </Button>
                {downloadBtn}
            </div>*/}
            <Modal show={show} className="login-modal" onHide={handleClose}>
                <Modal.Header className="p-0 border-0" closeButton>
                </Modal.Header>
                <Modal.Body>

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
                        <Button variant="btn" className="red-btn w-100" type="button" onClick={() => {handleClose(); handleLogin(); setDisabled(true)}}>
                            Log in
                        </Button>
                        <br/>
                        <br/>
                        <Link to="/recover" onClick={handleClose}>Forgot your password?</Link>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal