import React from 'react';
import ItemMessage from './item-message';
import '../../source/css/side-bar/all-message.css';
//import myAvatar from '../../source/images/avatar.jpg';

const AllMessage=(props)=>{
    
        const users=props.usuarios;
    
    const myTalkMessage=(avatar,username)=>{
        props.showNewTalk(avatar,username);
    }
    
    return (
        <div className="allMessage">
            {   
                users.map((element,i)=>{
                    if(i!==0){
                        return <ItemMessage key={i} showNewTalk={myTalkMessage} avatar={element.photo} username={element.username} time={element.lastMessage.time} marques={element.lastMessage.visto} content={element.lastMessage.body} numberSMS={element.countAllMessage}/>
                    }
                    return null;
                })
            }
        </div>
    )
}

export default AllMessage;