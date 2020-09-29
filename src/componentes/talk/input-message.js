import React,{useState} from 'react';
import '../../source/css/talk/input-message.css';

function InputMessage(props){

    const [mensagemTexto,setMensagemTexto]=useState('');

    const escreverMensagemTexto=(event)=>{
        setMensagemTexto(event.target.value);
    }

    const enviar=(event)=>{
        if(event.keyCode===13){
            props.sendMessage(mensagemTexto);
            setMensagemTexto('');
        }
    }

    return (
        <div className="inputMessage">
            <div>
                <i className="far fa-grin"></i>
                <i className="far fa-paperclip"></i>
            </div>
            <input type="text" name="mensagem" value={mensagemTexto} onChange={escreverMensagemTexto} placeholder="Mensagem" onKeyUp={enviar}/>
            <i className="fa fa-microphone"></i>
        </div>
    );
}

export default InputMessage;