import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSalvar from '../../img/salvar1.jpg'
import iconeSalvarPreto from '../../img/salvarescuro2.jpg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/compartilhar2.jpg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    salvar: false,
    numeroCurtidas: 0,
    comentando: false,
    compartilhar: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    if(this.state.curtido){
      this.setState({
      curtido: false,
      numeroCurtidas: this.state.numeroCurtidas - 1
      })
      } else {
      this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickCompartilhar = () => {
    this.setState({compartilhar: !this.state.compartilhar})
  }

  onClickSalvar = () => {
    if (this.state.salvar) {
      this.setState({salvar: false})
    } else {
      this.setState({salvar: true})
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoCompartilharFacebook = () => {
    this.setState({
      compartilhar: false,
    })
    console.log("Post compartilhado no Facebook")
  }

  aoCompartilharInstagram = () => {
    this.setState({
      compartilhar: false,
    })
    console.log("Post compartilhado no Instagram")
  }

  aoCompartilharTwitter = () => {
    this.setState({
      compartilhar: false,
    })
    console.log("Post compartilhado no Twitter")
  }

  render() {
    let iconeCurtida
    let iconeSalvarPost

    if(this.state.curtido === false) {
      iconeCurtida = iconeCoracaoBranco
    } else {
      iconeCurtida = iconeCoracaoPreto
    }

    if(this.state.salvar === false) {
      iconeSalvarPost = iconeSalvar
    } else {
      iconeSalvarPost = iconeSalvarPreto
    }

    let componenteComentario
    let componenteCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilharFacebook}/>
      //componenteCompartilhar = <SecaoCompartilhar compartilharInstagram={this.aoCompartilharInstagram}/>
      //componenteCompartilhar = <SecaoCompartilhar compartilharTwitter={this.aoCompartilharTwitter}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeSalvarPost}
          onClickIcone={this.onClickSalvar}
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post