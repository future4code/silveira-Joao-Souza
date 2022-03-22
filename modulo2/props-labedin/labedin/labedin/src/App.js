import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="http://pm1.narvii.com/7084/17e6030768ef9686b5d3f6f51ef184031929f138r1-735-1040v2_uhq.jpg" 
          nome="João Vitor Souza" 
          descricao="Oi, eu sou o João. Atualmente estou estudando desenvolvimente web e me dedicando para me tornar fullstack."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          nome="Email:"
          descricao="joao-webfs@hotmail.com"
        />

        <CardPequeno
          nome="Endereço:" 
          descricao="Nijigen no Mori, 2425 Kusumoto Awaji, Hyogo"
         
         />
      </div>    
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://img2.gratispng.com/20180621/bxv/kisspng-doctor-manhattan-hydrogen-atom-computer-icons-clip-5b2bf801e7e904.8843676415296081939499.jpg" 
          nome="Labenu" 
          descricao="Aprendendo cada dia mais. Confie no processo!" 
        />
        
        <CardGrande 
          imagem="https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png" 
          nome="React" 
          descricao="Se você acreditar que uma coisa é impossível, você a tornará impossível." 
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
