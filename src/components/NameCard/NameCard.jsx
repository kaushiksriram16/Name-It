import React from 'react';
import './NameCard.css'

const nameCheapUrl =
    'https://www.namecheap.com/domains/registration/results/?domain=%27%3B';

const NameCard = ({ suggestedName }) => {
    return (
        <a 
        href={`${nameCheapUrl}${suggestedName}`} 
        className="card-link" 
        target="_blank" 
        rel="noreferrer"
        >

        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        
        </a>
    );
};
export default NameCard;
