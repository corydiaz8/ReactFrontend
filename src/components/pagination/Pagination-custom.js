import React from 'react';
import {Pagination} from 'react-bootstrap';

import './Pagination-custom.css';


const PaginationCustom = () => {
    return (
        <Pagination className="d-flex align-items-center mb-0">
            <Pagination.Prev disabled>
                <i className="icon-angle-left" />
            </Pagination.Prev>
            <p className="pagination-text mb-0"><span>1-11</span> of 253</p>
            <Pagination.Next >
                <i className="icon-angle-right" />
            </Pagination.Next>
        </Pagination>
    )
};

export default PaginationCustom;