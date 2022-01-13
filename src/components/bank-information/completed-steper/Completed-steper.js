import React from 'react';
import {useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import achImg from '../../../assets/images/ach.png';
import achDescImg from '../../../assets/images/ach-desc.png';
import stripeImg from '../../../assets/images/stripe.png';

import {Form} from 'react-bootstrap'

import './Completed-steper.css'

const tutorialSteps = [
    {
        label: 'first',
    },
    {
        label: 'second',
    },
];

const CompletedSteper = ({ verify }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(1);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    let stepOne = (

            <div>
                <div className="row">
                    <div className=" col-sm-6 mb-2 mb-0">
                        <figure
                            className="brand-image orange-border d-flex align-content-center justify-content-center flex-column w-100 h-100 logo-container">
                            <img src={achImg} className="img-fluid mb-3" alt=""/>
                            <img src={achDescImg} className="mt-1 img-fluid cl-house w-100 h-auto" alt=""/>
                        </figure>
                    </div>
                    <div className="col-sm-6 mb-2 mb-0">
                        <figure
                            className="brand-image d-flex align-content-center justify-content-center flex-column w-100 h-100 logo-container">
                            <img src={stripeImg} className="img-fluid w-100 h-auto" alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button className='orange-button text-capitalize'
                            onClick={handleNext}
                    >Setup Payment Method</Button>
                </div>
            </div>),
        stepTwo = (
            <Form>
                <Form.Group className="d-flex flex-wrap">
                    <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2">Business Account
                        Name</Form.Label>
                    <Form.Control type="text" className="input shadow-none col-sm-6"
                                  placeholder="Business Account Name"/>
                </Form.Group>
                <Form.Group className="d-flex flex-wrap">
                    <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2"> Business ABA/Routing
                        Number</Form.Label>
                    <Form.Control type="text" className="input shadow-none col-sm-6"
                                  placeholder="Business ABA/Routing Number"/>
                </Form.Group>
                <Form.Group className="d-flex flex-wrap">
                    <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2"> Business Account
                        Number</Form.Label>
                    <Form.Control type="text" className="input shadow-none col-sm-6"
                                  placeholder=" Business Account Number"/>
                </Form.Group>
                <Form.Group className="d-flex flex-wrap">
                    <Form.Label className="label col-sm-6 align-self-center p-0 pr-sm-2">Business Address associated
                        with the account</Form.Label>
                    <Form.Control type="text" className="input shadow-none col-sm-6"
                                  value="7820 Poplar Ave, Germantown, TN 38138, USA"
                                  placeholder="Business Address associated with the account"/>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button className='orange-button text-capitalize'
                            onClick={() => verify(true)}
                    >Verify payment method</Button>
                </div>
            </Form>
        );

    let steps = activeStep === 1 ? stepOne : stepTwo;

    return (
        <div className="stepper-container">
            <p className="stepper-container__title">To start earning, please setup your preferred payment method</p>
            <div>
                {steps}
            </div>
            <div className="position-absolute stepper-bullets d-flex flex-row flex-sm-column justify-content-between">
                <div className="stepper-bullets__text">Step {activeStep} of {maxSteps}</div>
                <MobileStepper
                    className='justify-content-start p-0 bg-white'
                    steps={maxSteps}
                    position="static"
                    variant={null}
                    activeStep={activeStep}
                    nextButton={ activeStep !== maxSteps ?
                        <Button className='next rounded-circle p-0' size="small" onClick={handleNext}
                                disabled={activeStep === maxSteps}>
                        </Button> : null
                    }
                    backButton={ activeStep !== maxSteps ?
                        <Button className="back rounded-circle p-0" size="small" onClick={handleBack}
                                disabled={activeStep === 1}>
                        </Button> : null
                    }
                />
            </div>
        </div>
    );
}

export default CompletedSteper;
