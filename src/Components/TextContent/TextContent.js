import React from "react";
import questionIcon from "../../images/question-icon.png";
import bulletPoint from "../../images/bullet-point.png";
import chat from "../../images/chat.png";
import "./TextContent.css";

const TextContent = () => {
  return (
   <div className="animation">
        <div className="text-content-cart mx-auto">
      <div className="mt-5">
      <h3 className="question mb-3">
        Frequently Asked Questions <img src={questionIcon} />
      </h3>
      <h4 className="question1 mb-3">
        <img src={bulletPoint} /> Can I redeem my FB before the original term?
      </h4>
      <h4 className="question1 mb-3">
        <img src={bulletPoint} /> How do I pay my Credit card bill?
      </h4>
      <h4 className="question1 mb-3">
        <img src={bulletPoint} /> How can I get my Account Statement?
      </h4>
      <h4 className="question1 mb-3">
        <img src={bulletPoint} /> What is the tenure of Fixed Deposit?
      </h4>
      <div className="mt-3">
        <button type="button" className="btn bot-button">
          <h3 className="chat">
            <img src={chat} /> Start a New Conversation
          </h3>
        </button>
      </div>
      </div>
    </div>
   </div>
  );
};

export default TextContent;
