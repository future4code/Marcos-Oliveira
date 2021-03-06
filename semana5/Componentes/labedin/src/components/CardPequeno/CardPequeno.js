import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
                <span>{ props.span }</span>
                <p>{ props.descricao }</p>
            <div>
                <p>{ props.endereco }</p>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default CardPequeno;