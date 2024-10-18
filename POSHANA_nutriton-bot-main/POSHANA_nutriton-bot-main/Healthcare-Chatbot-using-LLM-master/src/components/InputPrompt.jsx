import React from 'react';
import '../Chat.css';
import { HiArrowUp } from "react-icons/hi2";

const InputPrompt = ({ input, setInput, handleMessageSubmit }) => {
  return (
    <form onSubmit={handleMessageSubmit} className="flex prompt-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="input-container"
      />
      <button
        type="submit"
        className="send-button"
      >
        <HiArrowUp size={20} className="upload-icon" />
      </button>
    </form>
  );
};

export default InputPrompt;