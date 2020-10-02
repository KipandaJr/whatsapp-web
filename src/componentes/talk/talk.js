import React from 'react';
import BarTop from './bar-top';
import BodyMessage from './body-message';
import InputMessage from './input-message';
import '../../source/css/talk/talk.css';
//import AllMessage from '../side-bar/all-message';
//import profilePic from '../../source/images/profile-picture.jpg';

function Talk(props){
    
    const sendMyMessage=(contentReceive)=>{
        props.sendMessage({
            to:props.username,
            from:'me',
            content:contentReceive,
            check:false,
            time:'20:34'
        });
    }
    return (
        <div className="talk">
            <BarTop avatar={props.avatar} username={props.username}/>
            <BodyMessage ourMessage={props.myMessage(props.username)}/>
            <InputMessage sendMessage={sendMyMessage}/>
        </div>
    );
}

export default Talk;