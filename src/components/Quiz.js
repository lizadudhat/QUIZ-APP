import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';
import Header from '../Header';
import UserForm from '../UserForm';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [userDetails, setUserDetails] = useState(null); 
  const [quizStarted, setQuizStarted] = useState(false); 

  const questions = [
    {
      questionText: '1. What is 5 + 7?',
      answers: ['10', '11', '12', '13'],
      correctAnswer: '12',
    },
    {
      questionText: '2. What is 9 x 3?',
      answers: ['27', '28', '29', '30'],
      correctAnswer: '27',
    },
    {
      questionText: '3. What is 15 / 3?',
      answers: ['5', '4', '6', '7'],
      correctAnswer: '5',
    },
   
  ];

  
  const handleAnswerOptionClick = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
      setShowResults(true); 
    }
  };

  
  const handleUserFormSubmit = (details) => {
    setUserDetails(details); 
    setQuizStarted(true); 
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsQuizFinished(false);
    setShowResults(false);
    setQuizStarted(false); 
    setUserDetails(null); 
  };

  return (
    <div className="quiz-container">
      <Header onShowResults={() => setShowResults(true)} showResults={showResults} />
      
      {!quizStarted ? (
        <UserForm onSubmit={handleUserFormSubmit} /> 
      ) : (
        showResults ? (
          <Result 
            score={score} 
            totalQuestions={questions.length} 
            onRetakeQuiz={handleRetakeQuiz} 
            userDetails={userDetails} 
          />
        ) : (
          questions[currentQuestion] ? (
            <Question
              question={questions[currentQuestion]}
              onAnswerClick={handleAnswerOptionClick}
            />
          ) : (
            <p>Loading...</p>
          )
        )
      )}
    </div>
  );
};

export default Quiz;
