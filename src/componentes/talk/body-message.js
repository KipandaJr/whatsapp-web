import React from 'react';
import CardMessage from './card-message';
import '../../source/css/talk/body-message.css';

function BodyMessage(props){
    const messages=props.ourMessage;
    return (
        <div className="bodyMessage">
            {   
                messages.map(function(element,i){
                    if(element!=null){
                        return <CardMessage key={i} who={element.from==='me'?'me':'other'} content={element.content} time={element.time}/>
                    }
                    return null;
                })
            }
        </div>
    );
}

export default BodyMessage;