import React from 'react';
import imageLogo from '../source/images/home.jpg';
import '../source/css/home.css';

function Home(){
    return (
        <div className="home">
            <img src={imageLogo} className="img" alt="logo"/>
            <h1>Mantenha o seu telemóvel ligado<br/>à internet</h1>
            <p>
                O WhatsApp liga-se ao seu telemóvel para sincronizar as mensagens. Para<br/>
                reduzir o consumo de dados móveis, certifique-se de que o seu telemóvel<br/>
                está ligado a uma rede Wi-fi
            </p>
            <hr/>
            <span>
                <i className="fa fa-laptop"></i> O WhatsApp está disponivel para Windows. <span style={{color:"rgb(13,170,154)", cursor:"pointer"}}>Descarregar</span>
            </span>
        </div>
    );
}

export default Home;