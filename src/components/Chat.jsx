import React from "react";
import "../style/Chat.scss";
import more from "../assets/more.png";
import video from "../assets/video.png";
import user from "../assets/user.png";
import Messages from '../components/Messages'
import Input from '../components/Input'
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>John</span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={user} alt="" />
          <img src={more} alt="" />
        </div>

      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
