// import React from 'react';
// import UserPrompt from './UserPrompt';
// import AssistantResponse from './AssistantResponse';
// import '../Chat.css';

// const ResponseList = ({ messages }) => {
//   return (
//     <div className="chat-messages">
//       {messages.map((message, index) => (
//         <div key={index} className="messageClass">
//           {message.role === 'user' ? (
//             <UserPrompt text={message.text} />
//           ) : (
//             <AssistantResponse text={message.text} />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponseList;

import React from 'react';
import UserPrompt from './UserPrompt';
import AssistantResponse from './AssistantResponse';
import '../Chat.css';

const ResponseList = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className="messageClass">
          {message.role === 'assistant' ? (
            <AssistantResponse text={message.text} />
          ) : (
            <UserPrompt text={message.text} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResponseList;

// ResponseList.js
// import React from 'react';
// import UserPrompt from './UserPrompt';
// import AssistantResponse from './AssistantResponse';
// import userImage from '../images/user-image.jpg'; // Import user image
// import assistantImage from '../images/jyoti-image.jpg'; // Import assistant image
// import '../Chat.css';

// const ResponseList = ({ messages }) => {
//   return (
//     <div className="chat-messages">
//       {messages.map((message, index) => (
//         <div key={index} className="messageClass">
//           {message.role === 'user' ? (
//             <UserPrompt text={message.text} image={userImage} /> // Pass user image
//           ) : (
//             <AssistantResponse text={message.text} image={assistantImage} /> // Pass assistant image
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponseList;


// import React from 'react';
// import UserPrompt from './UserPrompt';
// import AssistantResponse from './AssistantResponse';
// import '../Chat.css';
// import userImage from '../images/user-image.jpg';
// import assistantImage from '../images/jyoti-image.jpg';

// const ResponseList = ({ messages }) => {
//   return (
//     <div className="chat-messages">
//       {messages.map((message, index) => (
//         <div key={index} className="messageClass">
//           {message.role === 'user' ? (
//             <>
//               <img src={userImage} alt="User" className="userImage" />
//               <UserPrompt text={message.text} />
//             </>
//           ) : (
//             <>
//               <AssistantResponse text={message.text} />
//               <img src={assistantImage} alt="Assistant" className="assistantImage" />
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponseList;

// import React from 'react';
// import UserPrompt from './UserPrompt';
// import AssistantResponse from './AssistantResponse';
// import '../Chat.css';
// import userImage from '../images/user-image.jpg';
// import assistantImage from '../images/jyoti-image.jpg';

// const ResponseList = ({ messages }) => {
//   return (
//     <div className="chat-messages">
//       {messages.map((message, index) => (
//         <div key={index} className="messageClass">
//           {message.role === 'user' ? (
//             <>
//               <img src={userImage} alt="User" className="userImage" />
//               <UserPrompt text={message.text} />
//             </>
//           ) : (
//             <>
//               <AssistantResponse text={message.text} />
//               <img src={assistantImage} alt="Assistant" className="assistantImage" />
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponseList;

// import React from 'react';
// import UserPrompt from './UserPrompt';
// import AssistantResponse from './AssistantResponse';
// import '../Chat.css';
// import userImage from '../images/user-image.jpg';
// import assistantImage from '../images/jyoti-image.jpg';

// const ResponseList = ({ messages }) => {
//   return (
//     <div className="chat-messages">
//       {messages.map((message, index) => (
//         <div key={index} className="messageClass">
//           {message.role === 'user' ? (
//             <>
//               <img src={userImage} alt="User" className="userImage" />
//               <UserPrompt text={message.text} />
//             </>
//           ) : (
//             <>
//               <AssistantResponse text={message.text} />
//               <img src={assistantImage} alt="Assistant" className="assistantImage" />
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ResponseList;
