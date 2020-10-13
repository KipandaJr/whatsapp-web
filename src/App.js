import React,{useState,useEffect} from 'react';
import Home from './componentes/home';
import SideBar from './componentes/side-bar/side-bar';
import Talk from './componentes/talk/talk';
import './source/css/App.css';
import mePic from './source/images/user-avatar/avatar-me.jpg';
import user1Pic from './source/images/user-avatar/avatar-1.jpg';
import user2Pic from './source/images/user-avatar/avatar-2.jpg';
import user3Pic from './source/images/user-avatar/avatar-3.jpg';
import userPicPadrao from './source/images/user-avatar/padrao.jpg';

import fire from './fire';

const App=()=>{
  let array=[
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
  ]
  
  const [showHome,setShowHome]=useState(true);
  const [Uavatar,setUavatar]=useState(null);
  const [realBoxMessage,setRealBoxMessage]=useState(
    [{
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
    }]
  );
  const [usuarios,setUsuarios]=useState(
    
      array
  );
  const [Uusername,setUusername]=useState('');

  const getAllUser=async ()=>{
    let oldUser=[
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
    ];
    await fire.database().ref('users').on('child_added',value=>{
      oldUser.push({
        username:value.val().username,
        photo: value.val().photo,
        lastMessage:value.val().lastMessage,
        countAllMessage:value.val().countAllMessage
      })
    })
    setUsuarios(oldUser);
  }
  /*useEffect(()=>{
    let oldUser=[];
    fire.database().ref('users').on('child_added',value=>{
      oldUser.push({
        username:value.val().username,
        photo: value.val().photo,
        lastMessage:value.val().lastMessage,
        countAllMessage:value.val().countAllMessage
      })
    })
    setUsuarios(oldUser);
  },[usuarios]);*/
  /*prototipoBoxMessage={
    to:'',
    from:'',
    content:'',
    check:false,
    time:''
  }*/

  /*useEffect(()=>{
    let oldMessage=realBoxMessage;
    fire.database().ref('messages').on('child_added',value=>{
      oldMessage.push({
        to:value.val().to,
        from:value.val().from,
        content:value.val().content,
        check:value.val().check,
        time:value.val().time
      })
    })
    setRealBoxMessage(oldMessage);
    console.log(realBoxMessage);
  },[realBoxMessage]);*/

  const getAllMessagesOnBD=async ()=>{
    let oldMessage=[];
    await fire.database().ref('messages').on('child_added',value=>{
      oldMessage.push({
        to:value.val().to,
        from:value.val().from,
        content:value.val().content,
        check:value.val().check,
        time:value.val().time
      })
    })
    setRealBoxMessage(oldMessage);
  }

  useEffect(()=>{
    getAllMessagesOnBD();
  },[])
  
  useEffect(()=>{
    getAllUser();
  },[])

  const newMessage=(message)=>{
    /*let array=realBoxMessage.map((element)=>{
      return element
    });
    array.push(message);*/
    fire.database().ref('messages').push().set(message);
    getAllMessagesOnBD();
    //setRealBoxMessage(array);
  }

  const newUser=(usernameSended,messageSended)=>{
    //let array=usuarios;
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
    fire.database().ref('users').push().set(user);
    getAllUser();
    /*array.push(user);
    setUsuarios(array);*/
  
    let sms={
      to:usernameSended,
      from:'me',
      content:messageSended,
      check:false,
      time:'20:34'
    }
    newMessage(sms);
  }

  const newTalk=(avatar,username)=>{
    setUavatar(avatar);
    setUusername(username);
    setShowHome(false);
  }

  const allMessage=(username)=>{
    console.log(realBoxMessage);
    let ourMessage=realBoxMessage.map((message)=>{
      if(message.to===username || message.from===username){
        return message;
      }
      return null;
    });

    return ourMessage;
  }

  return (
    <div className="container" >
      {console.log(usuarios,"usuairos")}
      <SideBar usuarios={usuarios} showNewTalk={newTalk} addNewUser={newUser}/>
      {showHome ? <Home/> : <Talk username={Uusername} avatar={Uavatar} sendMessage={newMessage} myMessage={allMessage}/>}
    </div>
  )
}

export default App;