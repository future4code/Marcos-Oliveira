import React from 'react';

class PerguntaFechada extends React.Component {

    render() {
        return(
          <div>
            <select>
                {this.props.opcoes.map((opcao, index) => {
                    return <option>{opcao}</option>
                })}
            </select>
          </div>
        );

    }
}

export default PerguntaFechada;