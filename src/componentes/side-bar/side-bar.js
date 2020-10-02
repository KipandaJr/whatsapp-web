import React from 'react';
import Options from './options';
import NewChat from './option-chat/new-chat';
import Search from './search';
import AllMessage from './all-message';
import '../../source/css/side-bar/side-bar.css';

export default class sideBar extends React.Component {
    constructor(){
        super();
        this.state={
            newChat:false
        }
    }

    ToogleNewChat=()=>{
        this.setState({newChat: !this.state.newChat})
    }

    myTalk=(avatar,username)=>{
        this.props.showNewTalk(avatar,username);
    }

    myNewUser=(username,message)=>{
        this.props.addNewUser(username,message);
    }

    render() {
        return (
            <div className="side-bar">
                <Options avatar={this.props.usuarios[0].photo} toogleNewChat={this.ToogleNewChat} />
                {this.state.newChat ? <NewChat addNewUser={this.myNewUser} hideMe={this.ToogleNewChat}/> : <Search/>} 
                <AllMessage usuarios={this.props.usuarios} showNewTalk={this.myTalk}/>
            </div>
        )
    }
}