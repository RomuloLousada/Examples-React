import React, { useState } from 'react'
import CounterCSS from './counter.module.css'
import Decrement from './decrement';
import Increment from './increment';
import Steps from './steps';
import Value from './value';

export default function Counter() {
  const [currentCounter, setCurrentCounter] = useState(2);
  const [currentSteps, setCurrentSteps] = useState(0);

  const click = (value) => {
    setCurrentCounter(
      currentCounter + value
    ); 

    setCurrentSteps(
      currentSteps + 1
    );
  }

  return (
      <div className={CounterCSS.counterContainer}>
          <Decrement onDecrement={click} />
          <Value value={currentCounter} />
          <Increment onIncrement={click} />
          <Steps steps={currentSteps} />
      </div>
  );
}
