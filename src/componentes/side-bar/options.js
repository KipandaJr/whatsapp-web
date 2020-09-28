import React from 'react';
import '../../source/css/side-bar/options.css';
//import profilePic from '../../source/images/profile-picture.jpg';

function Options(props){
    return (
        <div className="options">
            <img src={props.avatar} className="profile" alt="ProfilePicture" />
            <ul>
                <li> <i className="fa fa-compress"></i> </li>
                <li> <i className="fa fa-comment-alt"></i> </li>
                <li> <i className="fa fa-ellipsis-v"></i> </li>
            </ul>
        </div>
    );
}

export default Options;