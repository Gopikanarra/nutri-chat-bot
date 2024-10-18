import React from 'react';
import '../Chat.css';
import userImage from '../images/user-image.jpg';

const UserPrompt = ({ text }) => {
  return (
    <div className="userMessage">
      <div className="usermessageContent">
      <div className="bg-gray-200 p-4 rounded-lg rounded-bl-none">
          <p className="user-text">{text}</p>
        </div>
      </div>
      <img src={userImage} alt="User" className="userImage" />
    </div>
  );
};

export default UserPrompt;
