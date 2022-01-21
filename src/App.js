import React, { useState } from 'react';
import './App.css';
import Button from './Button';

const App = () => {
  const [count, setCount] = useState(0);
  const clickHandler = (event) => {
    //Get the name of the button to decide whether 
    //it's increase or decrease button
    const name = event.target.name;
    if (name === "increase") {
      setCount(count + 1);
    }
    else {
      setCount(count - 1);
    }

  }
  return <div className="App">
    <div className="count">Count : {count}</div>
    <Button buttonName="increase" clickHandler={clickHandler} />
    <Button buttonName="decrease" clickHandler={clickHandler} />
  </div>;
};

export default App;
