import React, {useState} from 'react';
import ExistingDetails from './existing-details';
import CreateDetails from './create-details';
import DetailsEmpty from './details-empty/Details-empty';
import PaginationCustom from '../../components/pagination';
import BlockHeader from '../../components/block-header';

import './Details.css';


const Details = () => {
    const [state, changeState] = useState('empty');
    return (
        <div className="d-flex flex-column h-100">
            <div className="flex-grow-1 d-flex flex-column">
                <BlockHeader title="Deals" buttonText="+ Create new deal" handler={() => changeState('details')}/>
                {state === 'details' && <CreateDetails publish={changeState}/>}
                {state === 'list' && <ExistingDetails/>}
                {state === 'empty' && <DetailsEmpty createDeal={changeState}/>}
            </div>
            <footer className="d-flex flex-wrap justify-content-end align-items-center  table-container__footer">
                <PaginationCustom/>
            </footer>
        </div>
    )
};

export default Details;
