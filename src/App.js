import React from 'react';
import './App.css'; // Import your CSS file for styling

const Card = () => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://via.placeholder.com/150"
        alt="Card"
      />
      <div className="card-content">
        <h3>Card Title</h3>
        <p>
          This is a simple card with some sample text. You can customize it as
          per your needs.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Responsive Cards in React</h1>
      <div className="card-container">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;

