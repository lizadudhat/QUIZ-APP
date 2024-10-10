import React from 'react';
import'./App.css'
const Header = ({ onShowResults, showResults }) => {
  return (
    <header className="header"style={{backgroundColor:"purple"}}>
      <h1>Quiz Competition</h1>
      {!showResults && (
        <button  onClick={onShowResults}style={{backgroundColor:"purple",border:"none",color:"white"}}>
          Show Results
        </button>
      )}
    </header>
  );
};

export default Header;
