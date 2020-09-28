import React from 'react';
import BarTop from './bar-top';
import BodyMessage from './body-message';
import InputMessage from './input-message';
import '../../source/css/talk/talk.css';
//import profilePic from '../../source/images/profile-picture.jpg';

function Talk(props){
    return (
        <div className="talk">
            <BarTop avatar={props.avatar} username={props.username}/>
            <BodyMessage/>
            <InputMessage/>
        </div>
    );
}

export default Talk;