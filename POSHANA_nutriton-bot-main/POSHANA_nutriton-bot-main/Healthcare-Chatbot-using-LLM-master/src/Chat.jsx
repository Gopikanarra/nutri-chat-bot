import React, {  useState,useEffect } from 'react';
import './Chat.css';
import InputPrompt from './components/InputPrompt';
import ResponseList from './components/ResponseList';
import Logo from './images/100gigalogo.png';


const Chat = () => {
  const [messages, setMessages] = useState([
  ]);
  const [input, setInput] = useState('');
  const [fullInput, setFullInput] = useState([
    { "role": "user", 
      "content": "act like a nutritionist and help me diagnose my child's nutritional health. if i ask keep the amount of questions less than 20 and ask me each question separately. if i answer in anything other than nutrition related then answer with \"sorry\". keep acting like a nutritionist until you complete the diagnosis and give the nutrition plan. after the diagnosis, provide me with a proper nutrition plan in a table format of 3200 calories. The table should include columns for Food Item, Number of Serving, and Recommended Serving Size.Include a Mandatory <table> tag before the table. Take this as example: <table>Food item, # of Serving, Recommended Serving Size\n- Avocado: 1 medium, 1/2 avocado</table>"
    }
    // { "role": "user", 
    //   "content": "provide me with a proper nutrition plan in a table format of 3200 calories. The table should include columns for Food Item, Number of Serving, and Recommended Serving Size.Include a Mandatory <table> tag before the table. Take this as example: <table>Food item, # of Serving, Recommended Serving Size\n- Avocado: 1 medium, 1/2 avocado</table>"
    // }
  ]);

    // Load chat data from local storage on component mount
    useEffect(() => {
      const storedMessages = localStorage.getItem('chatMessages');
      if (storedMessages) {
        setMessages(JSON.parse(storedMessages));
      }
    }, []);

      // Save chat data to local storage whenever messages change
  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
    console.log('Chat messages stored in local storage:', messages);
  }, [messages]);
  
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    getChatGPTResponse(input);
    setInput('');
  };

  const getChatGPTResponse = async (input) => {
    try {
      const response = await fetchOpenAIChatCompletion(input);
      setMessages([
        ...messages,
        { text: input, role: 'user' },
        { text: response, role: 'assistant' },
      ]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchOpenAIChatCompletion = async (input) => {
    //const apiKey = 'sk-test'; // Replace 'YOUR_API_KEY' with your actual API key
    var messageArray = fullInput;
    if(input) {
      const message = {"role": "user", "content": input};
      //console.log("before request message::  " , message);
      messageArray = [...fullInput, message];
      //console.log("before request messageArray::  " , messageArray);
    }

    const parseResponseToTable = (responseText) => {
      // Check if the response text is a string
      if (typeof responseText === 'string') {
        // Regular expression to match table rows
        const tableRowRegex = /\|(.+?)\|/g;
        const tableRows = responseText.match(tableRowRegex);
    
        if (tableRows) {
          const tableData = tableRows.map((row) => {
            const cells = row.slice(1, -1).split('|').map((cell) => cell.trim());
            return cells;
          });
    
          return tableData;
        }
      }
    
      // If the response text is an array of arrays (table format), return it as is
      if (Array.isArray(responseText) && responseText.every(row => Array.isArray(row))) {
        return responseText;
      }
    
      return null; // Return null if the response text is not in table format
    };


    const requestOptions = {
      method: 'POST',
      headers: {
        'x-api-key': '',
        'Accept': '*/*',
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "model": "claude-3-haiku-20240307",
          "max_tokens": 2000,
          "messages": messageArray
      })
    };
  
    try {
      //https://cors-anywhere.herokuapp.com/corsdemo
      const response = await fetch('http://localhost:8080/https://api.anthropic.com/v1/messages', requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const tableData = parseResponseToTable(data.content[0].text);
      // const responseMessage = {"role": data.role, 
      //                         "content": data.content[0].text
      //                         }

      const responseMessage = {
        "role": data.role,
        "content": tableData || data.content[0].text // Use data.content[0].text if no table is found
      };

      //console.log("after response::  " , responseMessage);
      const responseArray = [...messageArray, responseMessage]
      //console.log("after response responseArray::  " , responseArray);
      // messageArray.push(assistantMessage);
      setFullInput(responseArray);
      //console.log("after response fullInput::  " , fullInput);
      return data.content[0].text; // Extracting the completed text from the response
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
      // Set submitted to true when the button is clicked
      setSubmitted(true);
      getChatGPTResponse(input);
  };

  return (
    <div className="flex chat-container">
      <img className='logoimage' src={Logo} width={100} height={100} alt="100 GIGA LOGO"/>
      <h1 className="title">
        POSHANA GPT
      </h1>
      <div className="subtitle-class">
        <label> by 100 Girls in GenAI Healthcare Team</label>
      </div>
      <ResponseList messages={messages}  />
      <button className='quickstart' type="submit" name="submitBtn" value="Submit" disabled={submitted} onClick={handleSubmit}>
      Quick Start : Craft me my child’s nutrition plan
      </button>
      <InputPrompt
      input={input}
      setInput={setInput}
      handleMessageSubmit={handleMessageSubmit}
      />
    </div>
  );
};

export default Chat;