import React from 'react';
import './App.css';
import foto from './Imagens/Image.jpeg';
import manutencao from './Imagens/computadores.png';
import onbyte from './Imagens/onbyte.png';
import email from './Imagens/email.png';
import endereco from './Imagens/endereco.png';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome="Marcos Roberto de Oliveira" 
          descricao="Sou de Taquaritinga, interior de São Paulo, trabalhei por um bom tempo com hardware mas agora quero me aprofundar na área de programação."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={email}
          span="Email: "
          descricao="marcosoliveira@outlook.com" 
        />
        
        <CardPequeno 
          imagem={endereco}
          span="Endereço: "
          descricao="Rua Santos Dumont" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={manutencao} 
          nome="Prodata" 
          descricao="Montagem e Manutenção de Micros e Notebooks." 
        />
        
        <CardGrande 
          imagem={onbyte} 
          nome="Onbyte" 
          descricao="Instrutor de cursos interativos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno  
          endereco="Rua Santos Dumont" 
          email="marcosoliveira@outlook.com" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
