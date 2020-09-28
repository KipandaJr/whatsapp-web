import React from 'react';
import '../../source/css/talk/input-message.css';

function InputMessage(){
    return (
        <div className="inputMessage">
            <div>
                <i className="far fa-grin"></i>
                <i className="far fa-paperclip"></i>
            </div>
            <form>
                <input type="text" name="message" placeholder="Mensagem"/>
            </form>
            <i className="fa fa-microphone"></i>
        </div>
    );
}

export default InputMessage;