import React from 'react';
import ItemMessage from './item-message';
import '../../source/css/side-bar/all-message.css';
//import myAvatar from '../../source/images/avatar.jpg';

export default class AllMessage extends React.Component {
    users=this.props.usuarios;
    myTalkMessage=(avatar,username)=>{
        this.props.showNewTalk(avatar,username);
    }
    render() {
        return (
            <div className="allMessage">
                {   
                    this.users.map((element,i)=>{
                        if(i!==0){
                            return <ItemMessage key={i} showNewTalk={this.myTalkMessage} avatar={element.photo} username={element.username} time={element.lastMessage.time} marques={element.lastMessage.visto} content={element.lastMessage.body} numberSMS={element.countAllMessage}/>
                        }
                    })
                }
            </div>
        )
    }
}