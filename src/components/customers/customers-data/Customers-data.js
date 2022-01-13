import React from 'react';
import {Button, DropdownButton, Table} from 'react-bootstrap';

import './Customers-data.css';
import SearchBlock from "../../search-block";
import AlertBlock from "../../alert-block/Alert-block";

const CustomersData = ({add, isInvited, showInvitation}) => {
    return (
        <React.Fragment>
            <header
                className="d-flex justify-content-between justify-content-between secttion-container__header position-relative p-0">
                {add && <SearchBlock/>}
            </header>
            <div className="table-container flex-grow-1 position-relative">
                <Table responsive className='business-table border-0 m-0'>
                    <thead>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="align-middle bold-text text-center">1.</td>
                        <td className="align-middle text-center">
                            <a href=""
                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                <figure
                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                    {/*alt="user pic"*/}
                                    {/*/>*/}
                                    <i className="icon-user"/>
                                </figure>
                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                            </a></td>
                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                        <td className="align-middle text-center dropdown-container position-relative">
                            <DropdownButton id="dropdown-basic-button"
                                            className="btn  border-0 bg-transparent shadow-none p-0 table-icon-btn"
                                            title={
                                                <i className="icon-add-user"/>
                                            }>
                                <Button type="button"
                                        onClick={() => showInvitation(true)}
                                        className="btn bg-transparent border-left-0 border-right-0 border-top-0 shadow-none d-block w-100 rounded-0">
                                    Invite via Email
                                </Button>
                                <Button type="button"
                                        className="btn bg-transparent border-0 shadow-none d-block w-100 rounded-0">
                                    Invite via SMS
                                </Button>
                            </DropdownButton>
                        </td>
                        <td className="align-middle text-center">
                            <button type="button"
                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                <i className="icon-pen"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle bold-text text-center">1.</td>
                        <td className="align-middle text-center">
                            <a href=""
                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                <figure
                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                    {/*alt="user pic"*/}
                                    {/*/>*/}
                                    <i className="icon-user"/>
                                </figure>
                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                            </a></td>
                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                        <td className="align-middle text-center dropdown-containe">
                            <button type="button"
                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                <i className="icon-user-check"/>
                            </button>
                        </td>
                        <td className="align-middle text-center">
                            <button type="button"
                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                <i className="icon-pen"/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="align-middle bold-text text-center">1.</td>
                        <td className="align-middle text-center">
                            <a href=""
                               className="d-flex align-items-center user text-decoration-none text-truncate bold-text">
                                <figure
                                    className="rounded-circle overflow-hidden m-0 user__image flex-shrink-0 d-flex align-items-center justify-content-center">
                                    {/*<img className="thumbnail-image img-fluid w-100 h-100"*/}
                                    {/*alt="user pic"*/}
                                    {/*/>*/}
                                    <i className="icon-user"/>
                                </figure>
                                <span className="user__name">
                                             {'Joe Flowers'}
                                         </span>
                            </a></td>
                        <td className="align-middle text-center  table-email">sample@sample.com</td>
                        <td className="align-middle  text-center text-black">+1 800 1234 567</td>
                        <td className="align-middle text-center dropdown-container position-relative">
                            <DropdownButton id="dropdown-basic-button"
                                            className="btn  border-0 bg-transparent shadow-none p-0 table-icon-btn"
                                            title={
                                                <i className="icon-add-user"/>
                                            }>
                                <Button type="button"
                                        onClick={() => showInvitation(true)}
                                        className="btn bg-transparent border-left-0 border-right-0 border-top-0 shadow-none d-block w-100 rounded-0">
                                    Invite via Email
                                </Button>
                                <Button type="button"
                                        className="btn bg-transparent border-0 shadow-none d-block w-100 rounded-0">
                                    Invite via SMS
                                </Button>
                            </DropdownButton>
                        </td>
                        <td className="align-middle text-center">
                            <button type="button"
                                    className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                                <i className="icon-pen"/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                {isInvited && <AlertBlock onClose={() => showInvitation(false)}/>}
            </div>
        </React.Fragment>
    )
}

export default CustomersData;