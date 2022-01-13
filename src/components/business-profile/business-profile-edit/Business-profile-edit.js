import React, {useState} from 'react';
import DefaultImage from '../../../assets/images/default.png';
import {Button, Form} from 'react-bootstrap';

import './Business-profile-edit.css';
import imageProfile from '../../../assets/images/profil_image.png';

const BusinessProfileEdit = () => {
    const [edit, setEdit] = useState(true);
    const data = {
        name: 'Joe',
        surname: 'Flowers',
        email: 'joe@flowers.com',
        desc: 'Joe Flowers is leading online and offline store that offers various species of flowers',
        address: '7820 Poplar Ave, Germantown, TN 38138, USA',
        phone: '3096843154',
        owner: 'Tarun',
        dealPublishDate: '06/13/2020',
        dealDescription: 'Cheaper Than Black Friday iMac + Free 2 Day Shipping'
    };
    return (
        <div className="business-profile-page col-12">
            <div className="d-flex flex-wrap flex-column justify-content-between align-items-start mb-2">
                <div className="col-12 d-flex flex-column align-items-center p-0">
                    <Form className="create-details-form-container">
                        <div className="row">
                            <div className="col-sm-12 d-flex flex-row align-items-center border-bottom px-0 py-3 mb-2">
                                {/*<a href=""*/}
                                {/*className="business-profile-image rounded-circle d-block overflow-hidden shadow">*/}
                                {/*<img src={DefaultImage} alt="" className="w-100 h-100 img-fluid"/>*/}
                                {/*</a>*/}
                                <div>
                                    <div
                                        className="business-profile-image rounded-circle d-block overflow-hidden shadow position-relative">
                                        <img src={DefaultImage} alt="" className="w-100 h-100 img-fluid"/>
                                        <div className="position-absolute d-flex align-items-center justify-content-center overflow-hidden img-upload-container w-100 h-100">
                                            <Button variant='link' className='text-decoration-none text-white shadow-none p-0 mr-1'>
                                                <i className="icon-repeat"/>
                                            </Button>
                                            <Button variant='link' className='text-decoration-none text-white shadow-none p-0'>
                                                <i className="icon-image"/>
                                            </Button>
                                        </div>
                                        <input type="file" className="position-absolute img-upload w-100 h-100"/>
                                    </div>
                                </div>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none font-weight-bold"
                                                  placeholder="Deal Name"
                                                  value={data.name} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none font-weight-bold mx-2"
                                                  placeholder="Deal Name"
                                                  value={data.surname} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="text" className="input shadow-none mx-3 px-1"
                                                  placeholder="Deal Name"
                                                  value={data.email} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>

                            <div className="col-12 d-flex align-items-center p-0">
                                <Form.Group controlId="formBasicEmail"
                                            className='w-100 input-with-icon position-relative'>
                                    <i className="icon-address-card business-profile-icon position-absolute"/>
                                    <Form.Control type="text"
                                                  className="input shadow-none position-relative bg-transparent"
                                                  placeholder="Deal Name"
                                                  value={data.desc} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>


                            <div className="col-sm-12 d-flex flex-row align-items-center justify-content-center p-0">
                                <div className="row w-100">
                                    <div className="col-sm-6 d-flex flex-wrap justify-content-between p-0">
                                        <div className="col-sm-6 p-0">
                                            <Form.Group controlId="formBasicEmail"
                                                        className="input-with-icon position-relative mr-sm-3">
                                                <i className="icon-phone business-profile-icon position-absolute"/>
                                                <Form.Control type="text"
                                                              className="input shadow-none position-relative bg-transparent"
                                                              placeholder="Deal Name"
                                                              value={data.phone} disabled={(edit) ? '' : 'disabled'}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className="col-sm-6 p-0">
                                            <Form.Group controlId="formBasicEmail"
                                                        className="input-with-icon position-relative mr-sm-3">
                                                <i className="icon-user business-profile-icon position-absolute"/>
                                                <Form.Control type="text"
                                                              className="input shadow-none position-relative bg-transparent"
                                                              placeholder="Deal Name"
                                                              value={data.owner} disabled={(edit) ? '' : 'disabled'}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 p-0 pl-1">
                                        <Form.Group controlId="formBasicEmail"
                                                    className="input-with-icon position-relative">
                                            <i className="icon-globe  business-profile-icon position-absolute"/>
                                            <Form.Control type="text"
                                                          className="input shadow-none orange-btn website position-relative bg-transparent"
                                                          placeholder="Deal Name"
                                                          value="business.momnpophub.com"
                                                          disabled={(edit) ? '' : 'disabled'}
                                            />
                                        </Form.Group>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 d-flex align-items-center p-0">
                                <Form.Group controlId="formBasicEmail"
                                            className='w-100 input-with-icon position-relative'>
                                    <i className="icon-map-marker-alt business-profile-icon position-absolute"/>
                                    <Form.Control type="text"
                                                  className="input shadow-none position-relative bg-transparent"
                                                  placeholder="Deal Address"
                                                  value={data.address} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>
                            </div>

                            <div
                                className="col-12 d-flex align-items-center justify-content-between m-0 p-0 position-relative">
                                <Form.Group controlId="formBasicEmail" className='w-100 input-with-icon'>
                                    <i className="icon-map-marker-alt business-profile-icon position-absolute"/>
                                    <Form.Control type="text"
                                                  className="input shadow-none position-relative bg-transparent"
                                                  placeholder="Deal Address"
                                                  value={data.address} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>

                                <Button variant="link" className="text-decoration-none shadow-none ml-4 close-btn p-0"
                                        type="submit">
                                    <i className="icon-close"/>
                                </Button>
                            </div>

                            <div className="col-12 d-flex align-items-center justify-content-between p-0">
                                <Form.Group controlId="formBasicEmail"
                                            className='w-75 m-0 input-with-icon position-relative'>
                                    <i className="icon-map-marker-alt business-profile-icon position-absolute"/>
                                    <Form.Control type="text"
                                                  className="input shadow-none position-relative bg-transparent"
                                                  placeholder="Deal Address"
                                                  value={data.address} disabled={(edit) ? '' : 'disabled'}
                                    />
                                </Form.Group>

                                <Button variant="link" className="text-decoration-none shadow-none grey-btn ml-1 w-25"
                                        type="submit">
                                    Add New Location
                                </Button>
                            </div>

                        </div>
                    </Form>
                </div>
            </div>

        </div>
    )
};

export default BusinessProfileEdit