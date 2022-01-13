import React from 'react';
import {Table} from 'react-bootstrap';

import './Existing-details.css';
import {Link} from "react-router-dom";


const ExistingDetails = () => {
    return (
        <div className="table-container flex-grow-1">
            <Table responsive className='details-table border-0 m-0'>
                <thead>
                <tr>
                    <th className="align-middle border-0">Deal name</th>
                    <th className="align-middle border-0">Sales</th>
                    <th className="align-middle border-0">Start Date</th>
                    <th className="align-middle border-0">End Date</th>
                    <th className="align-middle border-0">Options</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="align-middle bold-text">
                        <Link to="/deal-details" className="details-name">
                            Friday - $30.00 <i className="icon-eye"></i>
                        </Link>
                    </td>
                    <td className="align-middle bold-text">924</td>
                    <td className="align-middle bold-text">6/24/2020</td>
                    <td className="align-middle bold-text">12/24/2020</td>

                    <td className="align-middle">
                        <button type="button"
                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                            <Link to='/deal-details?edit'>
                                <i className="icon-pen"/>
                            </Link>
                        </button>
                        <button type="button"
                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                            <i className="icon-trash table-icon-delete "/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="align-middle bold-text">
                        <Link to="/deal-details" className="details-name">
                            Friday - $30.00
                            <i className="icon-eye"></i>
                        </Link>
                    </td>
                    <td className="align-middle bold-text">924</td>
                    <td className="align-middle bold-text">6/24/2020</td>
                    <td className="align-middle bold-text">12/24/2020</td>

                    <td className="align-middle">
                        <button type="button"
                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                            <Link to='/deal-details?edit'>
                                <i className="icon-pen"/>
                            </Link>
                        </button>
                        <button type="button"
                                className="btn table-icon-btn  border-left-0 border-right-0 border-bottom-0 bg-transparent shadow-none p-0">
                            <i className="icon-trash table-icon-delete "/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>

    )
};

export default ExistingDetails;
