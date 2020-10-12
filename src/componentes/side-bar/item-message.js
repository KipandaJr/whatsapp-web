import React/*,{useEffect,useState} */from 'react';
import '../../source/css/side-bar/item-message.css';

const ItemMessage=(props)=> {
    const talkShow=()=>{
        props.showNewTalk(props.avatar,props.username);
    }

    return (
        <div className="itemMessage" onClick={talkShow}> 
            <img src={props.avatar} className="avatar" alt={props.username}/>
            <div>
                <div className="topo">
                    <span className="username">{props.username}</span>
                    <span className="time ativo-txt">{props.time}</span>
                </div>
                <div className="bottom">
                    <div>
                        {props.marques===1 && 
                            <i className="fa fa-check visto"></i>
                        }
                        {props.marques===2 && 
                            <i className="fa fa-check-double visto"></i>
                        }
                        <span className="miniMessage">{props.content}</span>
                    </div>
                    {props.numberSMS>0 && 
                        <span className="numberSMS ativo">{props.numberSMS}</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemMessage;