import React,{useState} from 'react';
import '../../../source/css/side-bar/option-chat/new-chat.css';
//import profilePic from '../../source/images/profile-picture.jpg';

function NewChat(props){

    const [nameNewUser,setNameNewUser]=useState('');
    const [userNewMessage,setUserNewMessage]=useState('');

    const sendNewUser=()=>{
        props.addNewUser(nameNewUser,userNewMessage);
        props.hideMe();
    }

    const escreverNewUser=(event)=>{
        setNameNewUser(event.target.value);
    }

    const escreverUserNewMessage=(event)=>{
        setUserNewMessage(event.target.value);
    }

    return (
        <div className="new-chat">
            <h1><i className="fa fa-address-card"></i> novo contacto</h1>
            <div>
                <label><i className="fa fa-user-tie"></i> Nome do contacto </label>
                <input type='text' value={nameNewUser} onChange={escreverNewUser} placeholder="Insira o nome do contacto que deseja adicionar..."/>

                <label><i className="fa fa-comment-dots"></i> Mensagem </label>
                <textarea type='text' value={userNewMessage} onChange={escreverUserNewMessage} placeholder='Escreva uma mensagem para esse novo contacto' cols="50" rows="5"/>
                <button type="button" onClick={sendNewUser}>
                    <i className="fa fa-location-arrow"></i> adicionar e enviar
                </button>
            </div>
        </div>
    );
}

export default NewChat;