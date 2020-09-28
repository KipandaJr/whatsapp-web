import React from 'react';
import Options from './options';
import Search from './search';
import AllMessage from './all-message';
import '../../source/css/side-bar/side-bar.css';

export default class sideBar extends React.Component {
    myTalk=(avatar,username)=>{
        this.props.showNewTalk(avatar,username);
    }

    render() {
        return (
            <div className="side-bar">
                <Options avatar={this.props.usuarios.me.photo}/>
                <Search/>
                <AllMessage usuarios={this.props.usuarios} showNewTalk={this.myTalk}/>
            </div>
        )
    }
}