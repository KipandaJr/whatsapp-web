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
                <ItemMessage showNewTalk={this.myTalkMessage} avatar={this.users.user1.photo} username={this.users.user1.username} time={this.users.user1.lastMessage.time} marques={this.users.user1.lastMessage.visto} numberSMS={this.users.user1.countAllMessage}/>
                <ItemMessage showNewTalk={this.myTalkMessage} avatar={this.users.user2.photo} username={this.users.user2.username} time={this.users.user2.lastMessage.time} marques={this.users.user2.lastMessage.visto} numberSMS={this.users.user2.countAllMessage}/>
                <ItemMessage showNewTalk={this.myTalkMessage} avatar={this.users.user3.photo} username={this.users.user3.username} time={this.users.user3.lastMessage.time} marques={this.users.user3.lastMessage.visto} numberSMS={this.users.user3.countAllMessage}/>
            </div>
        )
    }
}