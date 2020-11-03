import React, { useState } from 'react';
import Band from './components/counter/band';
import Counter from './components/counter/counter'
import Counter2 from './components/counter/counter2'

export default function App() {
  const [currentCounter, setCurrentCounter] = useState(2);
  const [currentSteps, setCurrentSteps] = useState(0);

  const handleCount = (value) => {
    setCurrentCounter(
      currentCounter + value
    ); 

    setCurrentSteps(
      currentSteps + 1
    );
  }

  return (
    <div style={{margin: 2 + 'em'}}>
      <h3>Band</h3>
      <Band/>
      <h3>Counter - (Estado Isolado)</h3>
      <Counter/>
      <Counter/>
      <Counter/>
      <h3>Counter Prop - (Estado Compartilhado)</h3>
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={currentSteps}/>
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={currentSteps}/>
      <Counter2 onCount={handleCount} countValue={currentCounter} currentStep={currentSteps}/>
    </div>
  )
}
