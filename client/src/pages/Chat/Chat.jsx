import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userChats } from "../../api/ChatRequest.js";
import ChatBox from "../../Components/ChatBox/ChatBox.jsx";
import Conversation from "../../Components/Conversation/Conversation.jsx";
import LogoSearch from "../../Components/LogoSearch/LogoSearch";
import NavBar from "../../Components/NavBar/NavBar.jsx";
import "./Chat.css";
import { io } from "socket.io-client";
import { useRef } from "react";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const socket = useRef();
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage , setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);


  useEffect(() => {
    if(sendMessage !== null){
        socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);




  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    //   console.log(onlineUsers);
    });
  }, [user]);
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  const checkOnlineStatus = (chat) =>{
    const chatMember = chat.members.find((member)=>member!==user._id);
    const online = onlineUsers.find((user)=>user._id=== chatMember);
    return online ? true : false;
  }

  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div onClick={()=>setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} online ={checkOnlineStatus(chat)}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Right-side-chat">
        <div style={{ width: "22rem", alignSelf: "flex-end" }}>
          <NavBar />
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage}
        />
        
      </div>
    </div>
  );
};

export default Chat;
