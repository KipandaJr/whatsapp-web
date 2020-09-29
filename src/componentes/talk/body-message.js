import React from 'react';
import CardMessage from './card-message';
import '../../source/css/talk/body-message.css';

function BodyMessage(props){
    let todasCards=[];
    const messages=props.ourMessage;
    return (
        <div className="bodyMessage">
            {   
                messages.forEach(function(element,i){
                    if(element!=null){
                        todasCards.push(<CardMessage key={i} who={element.from==='me'?'me':'other'} content={element.content} time={element.time}/>) 
                    }
                })
            }
            {
                todasCards
            }
        </div>
    );
}

export default BodyMessage;