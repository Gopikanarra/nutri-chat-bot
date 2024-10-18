import React from 'react';
import '../Chat.css';
import assistantImage from '../images/jyoti-image.jpg';

const AssistantResponse = ({ text }) => {

const parseMealPlanTable = (mealPlanText) => {
  const rows = mealPlanText.split('\n');
  const tableRows = rows.slice(5, -5); // Skip the first and last rows containing additional information and the table tags

  return tableRows.map(row => {
    if (row.trim().startsWith('|')) {
      const cells = row.trim().split('|').map(cell => cell.trim());
      // Ensure there are exactly 3 cells in the row
      if (cells.length !== 3) {
        throw new Error('Invalid table row format');
      }
      return cells;
    } else {
      // Preserve titles without trimming and convert to array
      return row.trim().split('|').map(cell => cell.trim());
    }
  });
};


  // Extracting the additional paragraph from the API response
  const additionalParagraph = text.split('\n').slice(-1)[0];

  const mealPlanTable = parseMealPlanTable(text);

  return (
    <div className="assistantMessage">
      <div className="messageContent">
        {text.includes('<table>') ? (
          <div className="bg-blue-100 p-4 rounded-lg rounded-tr-none shadow-md">
            <table>
              <tbody>
                {mealPlanTable.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="tableinfo">{additionalParagraph}</p>
          </div>
        ) : (
          <p className="assistant-text">{text}</p>
        )}
      </div>
      <img src={assistantImage} alt="Assistant" className="assistantImage" />
    </div>
  );
  
};

export default AssistantResponse;