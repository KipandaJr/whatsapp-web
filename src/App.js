import React/*,{useState,useEffect}*/ from 'react';
import Home from './componentes/home';
import SideBar from './componentes/side-bar/side-bar';
import Talk from './componentes/talk/talk';
import './source/css/App.css';
import mePic from './source/images/user-avatar/avatar-me.jpg';
import user1Pic from './source/images/user-avatar/avatar-1.jpg';
import user2Pic from './source/images/user-avatar/avatar-2.jpg';
import user3Pic from './source/images/user-avatar/avatar-3.jpg';
import userPicPadrao from './source/images/user-avatar/padrao.jpg';

export default class App extends React.Component{
  constructor(){
    super();
    this.state={
      showHome:true,
      Uavatar:null,
      realBoxMessage:[{
        to:'Maciel Martins',
        from:'me',
        content:'Ola',
        check:false,
        time:'22:23'
      },{
        from:'Maciel Martins',
        to:'me',
        content:'Ola Eu te amo',
        check:false,
        time:'22:23'
      },{
        from:'me',
        to:'Maciel Martins',
        content:'Mas eu não',
        check:false,
        time:'22:23'
      },{
        from:'Maciel Martins',
        to:'me',
        content:'Seu merdas...',
        check:false,
        time:'22:23'
      }],
      usuarios:[
        {
          photo: mePic,
        },
        {
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
        {
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
        {
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
      ],
      Uusername:''
    }
  }

  prototipoBoxMessage={
    to:'',
    from:'',
    content:'',
    check:false,
    time:''
  }

  newMessage=(message)=>{
    let array=this.state.realBoxMessage;
    array.push(message);
    this.setState({realBoxMessage:array});
  }

  newUser=(usernameSended,messageSended)=>{
    let array=this.state.usuarios;
    let user={
      username:usernameSended,
      photo: userPicPadrao,
      lastMessage:{
        id:1,
        body:messageSended,
        time:'23:43',
        visto:0
      },
      countAllMessage:4
    }
    array.push(user);
    this.setState({usuarios:array});
  
    let sms={
      to:usernameSended,
      from:'me',
      content:messageSended,
      check:false,
      time:'20:34'
    }

    this.newMessage(sms);
  }

  newTalk=(avatar,username)=>{
    this.setState({Uavatar:avatar});
    this.setState({Uusername:username});
    this.setState({showHome:false});
  }

  allMessage=(username)=>{
    let ourMessage=this.state.realBoxMessage.map((message)=>{
      if(message.to===username || message.from===username){
        return message;
      }
      //return null;
    });

    return ourMessage;
  }

  render(){
    return (
      <div className="container" >
          <SideBar usuarios={this.state.usuarios} showNewTalk={this.newTalk} addNewUser={this.newUser}/>
          {this.state.showHome ? <Home/> : <Talk username={this.state.Uusername} avatar={this.state.Uavatar} sendMessage={this.newMessage} myMessage={this.allMessage}/>}
      </div>
    )
  }
}