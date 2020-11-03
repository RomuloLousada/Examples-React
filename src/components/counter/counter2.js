import React, { Component } from 'react'
import CounterCSS from './counter.module.css'
import Decrement from './decrement';
import Increment from './increment';
import Steps from './steps';
import Value from './value';

export default function Counter2({ countValue, currentStep, onCount }) {
  const click = (value) => {
    onCount(value);
  }
  
  return (
    <div className={CounterCSS.counterContainer}>
      <Decrement onDecrement={click} />
      <Value value={countValue} />
      <Increment onIncrement={click} />
      <Steps steps={currentStep} />
    </div>
  )
}
