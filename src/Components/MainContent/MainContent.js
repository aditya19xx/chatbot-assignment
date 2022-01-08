import React, { useState } from "react";
import bot from "../../images/bot.png";
import TextContent from "../TextContent/TextContent";
import "./MainContent.css";

const MainContent = () => {

    const [openChatBot, setChatBot] = useState(false);


  return (
    <div className="chatbot-section">
      <div className="bot-img mx-auto">
      <button onClick={() => {setChatBot(true);}} type="button" className="btn bot-button"> <img  src={bot} /> </button>

      </div>
      { openChatBot && <TextContent />}
    </div>
  );
};

export default MainContent;
