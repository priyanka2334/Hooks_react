import React, { useReducer, useEffect } from 'react';
// import './App.css'

const initialState = {
  running: false,
  time: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, running: true };
    case 'STOP':
      return { ...state, running: false };
    case 'TICK':
      return { ...state, time: state.time + 1 };
    case 'RESET':
      return { ...state, time: 0, running: false };
    default:
      throw new Error();
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let timer;
    if (state.running) {
      timer = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [state.running]);

  return (
    <div>
      <h1>{state.time}</h1>
      <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default UseReducer;