import React, {Component} from 'react'
import './SecaoCompartilhar.css'

export class SecaoCompartilhar extends Component {

    state = {
		input: ""
	}

	onChangeMensagem = event => {
		const mensagem = event.target.value
		this.setState({input: mensagem})
	}

	render() {
		return <div className={'compartilhar-container'}>
			<div className={'compartilhar-button'}>
                <button onClick={this.props.aoCompartilhar}>Facebook</button>
                <button onClick={this.props.aoCompartilhar}>Instagram</button>
                <button onClick={this.props.aoCompartilhar}>Twitter</button>
            </div>
            <div className={'compartilhar-input'}>
                <input
                    className={'input-mensagem'}
                    placeholder={'Comentário'}
                    value={this.state.input}
                    onChange={this.onChangeMensagem}
                />
            </div>
		</div>
	}
}
