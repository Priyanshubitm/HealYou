import React, { useEffect, useRef, useState } from "react";
import { addMessage, getMessages } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import "./ChatBox.css";
import { format } from 'timeago.js';
import InputEmoji from "react-input-emoji";

const ChatBox = ({ chat, currentUser,setSendMessage ,receivedMessage}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll =useRef();
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);

  const handleChange = (newMessage)=>{
    setNewMessage(newMessage);
  }


  useEffect(()=>{
    const fetchMessags = async ()=> {
        try {
            const { data } = await getMessages(chat._id);
            console.log(data);
            setMessages(data);
        } catch (error) {
            console.log(error);
        }
    }
    if(chat !=null) fetchMessags();
  },[chat])

  


    const handleSend = async (e) => {
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser);
        setSendMessage({ ...message, receiverId })
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        }
        catch
        {
            console.log("error")
        }
    }

    useEffect(()=> {
        console.log("Message Arrived: ", receivedMessage)
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
          setMessages([...messages, receivedMessage]);
        }
      },[receivedMessage])

      useEffect(()=>{
        scroll.current?.scrollIntoView({behavior: 'smooth'})
      })

  return (
    <>
    <div className="ChatBox-container">
      {chat ? (
        <>
          {/* chat-header */}
          <div className="chat-header">
            <div className="follower">
              <div>
                <img
                  src={
                    userData?.profilepicture
                      ? process.env.REACT_APP_PUBLIC_FOLDER +
                        userData.profilepicture
                      : process.env.REACT_APP_PUBLIC_FOLDER +
                        "defaultProfile.jpeg"
                  }
                  alt="Profile"
                  className="followerImage"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="name" style={{ fontSize: "0.9rem" }}>
                  <span>
                    {userData?.firstname} {userData?.lastname}
                  </span>
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "95%",
                border: "0.1px solid #ececec",
                marginTop: "20px",
              }}
            />
          </div>
          {/* chat-body */}
          <div className="chat-body" >
            {messages.map((message) => (
              <>
                <div ref={scroll}
                  className={
                    message.senderId === currentUser
                      ? "message own"
                      : "message"
                  }
                >
                  <span>{message.text}</span>{" "}
                  <span>{format(message.createdAt)}</span>
                </div>
              </>
            ))}
          </div>
          {/* chat-sender */}
          <div className="chat-sender">
            <div >+</div>
            <InputEmoji
              value={newMessage}
              onChange={handleChange}
            />
            <div className="send-button button" onClick={handleSend}>Send</div>
            <input
              type="file"
              name=""
              id=""
              style={{ display: "none" }}
            //   ref={imageRef}
            />
          </div>{" "}
        </>
      ) : (
        <span className="chatbox-empty-message">
          Start a Conversation Warrior
        </span>
      )}
    </div>
  </>
  );
};

export default ChatBox;
