import React/*,{useState,useEffect}*/ from 'react';
import Home from './componentes/home';
import SideBar from './componentes/side-bar/side-bar';
import Talk from './componentes/talk/talk';
import './source/css/App.css';
import mePic from './source/images/user-avatar/avatar-me.jpg';
import user1Pic from './source/images/user-avatar/avatar-1.jpg';
import user2Pic from './source/images/user-avatar/avatar-2.jpg';
import user3Pic from './source/images/user-avatar/avatar-3.jpg';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      showHome:true,
      Uavatar:null,
      Uusername:''
    }
  }

  usuarios={
    me:{
      photo: mePic,
    },
    user1:{
      username:'Kipanda Cardoso',
      photo: user1Pic,
      lastMessage:{
        id:1,
        body:'Bro aqui tem uma cena bem boa... devias ver.',
        time:'23:43',
        visto:0
      },
      countAllMessage:4
    },
    user2:{
      username:'Maciel Martins',
      photo: user2Pic,
      lastMessage:{
        id:1,
        body:'Assim vais aceitar esse mambo mesmo?',
        time:'12:43',
        visto:1
      },
      countAllMessage:0
    },
    user3:{
      username:'JovemZinhaCorDeRosa',
      photo: user3Pic,
      lastMessage:{
        id:1,
        body:'Alguém aí do outro lado?',
        time:'17:23',
        visto:2
      },
      countAllMessage:10
    }
  }

  

  newTalk=(avatar,username)=>{
    this.setState({Uavatar:avatar});
    this.setState({Uusername:username});
    this.setState({showHome:false});
  }

  render(){
    return (
      <div className="container" >
          <SideBar usuarios={this.usuarios} showNewTalk={this.newTalk}/>
          {this.state.showHome ? <Home/> : <Talk username={this.state.Uusername} avatar={this.state.Uavatar}/>}
      </div>
    )
  }
}