import React/*,{useEffect,useState} */from 'react';
import '../../source/css/side-bar/item-message.css';

export default class ItemMessage extends React.Component {
    talkShow=()=>{
        //alert(this.props.username);
        this.props.showNewTalk(this.props.avatar,this.props.username);
    }

    render() {
        return (
            <div className="itemMessage" onClick={this.talkShow}> 
                <img src={this.props.avatar} className="avatar" alt={this.props.username}/>
                <div>
                    <div className="topo">
                        <span className="username">{this.props.username}</span>
                        <span className="time ativo-txt">{this.props.time}</span>
                    </div>
                    <div className="bottom">
                        <div>
                            {this.props.marques===1 && 
                                <i className="fa fa-check visto"></i>
                            }
                            {this.props.marques===2 && 
                                <i className="fa fa-check-double visto"></i>
                            }
                            <span className="miniMessage">{this.props.content}</span>
                        </div>
                        {this.props.numberSMS>0 && 
                            <span className="numberSMS ativo">{this.props.numberSMS}</span>
                        }
                    </div>
                </div>
            </div>
        )
    }
}