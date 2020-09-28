import React from 'react';
import '../../source/css/talk/bar-top.css';

function BarTop(props){
    return (
        <div className="barTop">
            <div>
                <img src={props.avatar} className="profile" alt="ProfilePicture" />
                <p>{props.username}</p> 
            </div>
            <ul>
                <li> <i className="fa fa-search"></i> </li>
                <li> <i className="fa fa-ellipsis-v"></i> </li>
            </ul>
        </div>
    );
}

export default BarTop;