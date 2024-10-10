import React from 'react';

const Question = ({ question, onAnswerClick }) => {
  return (
    <div className="question-container">
      <h2>{question.questionText}</h2>
      <div className="options-container">
        {question.answers.map((answer, index) => (
          <button key={index} className="option-btn" onClick={() => onAnswerClick(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
