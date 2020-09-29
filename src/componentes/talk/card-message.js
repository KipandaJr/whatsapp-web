import React from 'react';

function CardMessage(props){
    const check=<span> <i className="fa fa-check"></i> </span>
    return (
        <div className={props.who +" msg"}>
            <span>
                {props.content}
            </span>
            <div>
                <span>
                    {props.time}
                </span>
                {props.who==="me" && check } 
            </div>
        </div>
    );
}

export default CardMessage;