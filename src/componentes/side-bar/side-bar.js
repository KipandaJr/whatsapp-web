import React,{useState}  from 'react';
import Options from './options';
import NewChat from './option-chat/new-chat';
import Search from './search';
import AllMessage from './all-message';
import '../../source/css/side-bar/side-bar.css';

const SideBar=(props)=> {

    const [newChat,setNewChat]=useState(false);
    
    const ToogleNewChat=()=>{
        setNewChat(!newChat);
    }

    const myTalk=(avatar,username)=>{
        props.showNewTalk(avatar,username);
    }

    const myNewUser=(username,message)=>{
        props.addNewUser(username,message);
    }

    return (
        <div className="side-bar">
            <Options avatar={props.usuarios[0].photo} toogleNewChat={ToogleNewChat} />
            {newChat ? <NewChat addNewUser={myNewUser} hideMe={ToogleNewChat}/> : <Search/>} 
            <AllMessage usuarios={props.usuarios} showNewTalk={myTalk}/>
        </div>
    )
}

export default SideBar;