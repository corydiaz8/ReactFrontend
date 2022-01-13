import React from 'react';
import {Form, Button} from 'react-bootstrap';
import MaterialUIPickers from './../material-ui-pickers/Material-UI-Pickers';
import imageProfile from '../../assets/images/profil_image.png';
import CheckboxContainer from './../checkbox-container'
import './Form-component.css';


const FormComponent = ({edit, data, page, publish}) => {
    let checkboxDisabled = !page ? 'd-none' : 'd-flex justify-content-between align-items-center',
        image = !data.servicePicture ? (<img src={imageProfile} className="w-100 h-100 file-upload-container__image" alt=""/>) : (<i className="icon-image d-block align-self-center"/>),
        fileUploadClasses = !data.servicePicture ? 'position-relative file-upload-container bg-white d-flex align-content-center justify-content-center overflow-hidden' : 'position-relative file-upload-container bg-white d-flex align-content-center justify-content-center overflow-hidden p-0'
    return (
        <Form className="create-details-form-container">
            <div className="row">
                <div className="col-sm-8">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="label">Deal Name</Form.Label>
                        <Form.Control type="text" className="input shadow-none" placeholder="Deal Name"
                                      value={data.dealName} disabled={(edit) ? '' : 'disabled'}
                        />
                    </Form.Group>
                    <div className="d-flex flex-wrap">
                        <div className="col-sm-5 p-0">
                            <Form>
                                <Form.Group>
                                    <Form.Label className="label"> Deal & Service Picture</Form.Label>
                                    <div
                                        className={fileUploadClasses}>
                                        {image}
                                        <input type="file"
                                               className="position-absolute file-upload-container__input w-100 h-100"
                                               disabled={(edit) ? '' : 'disabled'}/>
                                    </div>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="col-sm-5 p-0 offset-sm-2">
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="label">Original Price</Form.Label>
                                <Form.Control type="text" className="input shadow-none" placeholder="$0.00"
                                              value={data.originalPrice} disabled={(edit) ? '' : 'disabled'}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="label">Discounted Price</Form.Label>
                                <Form.Control type="text" className="input shadow-none" placeholder="$0.00"
                                              value={data.discountedPrice} disabled={(edit) ? '' : 'disabled'}/>
                            </Form.Group>

                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <MaterialUIPickers edit={edit} dealDate={data.dealStartDate} labelText="Deal Start Date"/>
                    <MaterialUIPickers edit={edit} dealDate={data.dealEndDate} labelText="Deal End Date"/>
                    <MaterialUIPickers edit={edit} dealDate={data.dealPublishDate} labelText="Deal Publish Date"/>
                </div>
            </div>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="label">Deal Description</Form.Label>
                <Form.Control as="textarea" rows="4" className="shadow-none textarea" placeholder="Deal Description"
                              value={data.dealDescription} disabled={(edit) ? '' : 'disabled'}/>
            </Form.Group>
            <div className={checkboxDisabled}>
                <Form.Group>
                    <CheckboxContainer labetText="Send Email notification to customers"/>
                    <CheckboxContainer labetText="Send SMS notification to customers"/>
                </Form.Group>
                <Button variant="link" className="text-decoration-none shadow-none green-btn" type="submit"
                        onClick={() => publish('list')}
                >
                    Publish deal
                </Button>
            </div>
        </Form>
    )
};

export default FormComponent;
