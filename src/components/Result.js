import React from 'react';

const Result = ({ score, totalQuestions, onRetakeQuiz, userDetails }) => {
  return (
    <div className="result-container">
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <h3>User Details:</h3>
      <p><strong>Name:</strong> {userDetails.name}</p>
      <p><strong>Standard:</strong> {userDetails.standard}</p>
      <p><strong>Roll Number:</strong> {userDetails.rollNumber}</p>
      <button style={{backgroundColor:"purple",color:"white",color:"white",border:"none"}} onClick={onRetakeQuiz}>
        Retake Quiz
      </button>
    </div>
  );
};

export default Result;
