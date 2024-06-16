import React, { useReducer } from 'react';

// Definera vår reducer-funktion
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
        return { count: state.count = 0 };
    default:
      return state;
  }
};

// Grunvärdet
const initialState = { count: 0 };

const CounterWithUseReducer = () => {
  // Här börjar vi använda useReducer-hooken
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <div><button onClick={() => dispatch({ type: 'increment' })}>Increment</button></div>
      <div><button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button></div>
      <div><button onClick={() => dispatch({ type: 'reset' })}>Reset</button></div>

    </div>
  );
};

export default CounterWithUseReducer;