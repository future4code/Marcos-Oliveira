import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <div>
                <p>{ props.endereco }</p>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;