import React from 'react'

export default class teste extends React.Component {
    alt=()=>{
        this.props.name();
        alert(3);
    }
    render() {
        return (
            <div onClick={this.alt}>
                <p>Ola minha vida</p>            
            </div>
        )
    }
}
