import React from 'react';
import {Dropdown,Button} from 'react-bootstrap';

import './Mass-invitation.css';


const MassInvitation = ({ showInvitation }) => {
    return (
    <Dropdown className="dropdown-container">
        <Dropdown.Toggle id="dropdown-basic" className="mass-invitation bg-transparent border-0 p-0 rounded-0 shadow-none d-flex align-items-center">
            <i className="icon-add-groups" />
            <span>Mass invitation</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Button type="button"
                    onClick={() => showInvitation()}
                    className="btn bg-transparent border-left-0 border-right-0 border-top-0 shadow-none d-block w-100 rounded-0">
                Invite via Email
            </Button>
            <Button type="button"
                    className="btn bg-transparent border-0 shadow-none d-block w-100 rounded-0">
                Invite via SMS
            </Button>
        </Dropdown.Menu>
    </Dropdown>
    )
};

export default MassInvitation;