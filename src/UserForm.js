import React, { useState } from 'react';
import './App.css'
const UserForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [standard, setStandard] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && standard && rollNumber) {
      onSubmit({ name, standard, rollNumber });
    }
  };

  return (
    <div className="user-form-container">
      <h2>Enter student detail</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Standard:</label>
          <select
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            required
            className="form-input"  
          >
            <option value="">Select your standard</option>
            {[...Array(12)].map((_, index) => (
              <option key={index + 1} value={`Std ${index + 1}`}>Standard {index + 1}</option>
            ))}
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
          </select>
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input
            type="number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
            placeholder="Enter your roll number"
            className="form-input"
          />
        </div>
        <button type="submit" style={{backgroundColor:"purple",color:"white",border:"none",padding:"10px"}}>
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default UserForm;
