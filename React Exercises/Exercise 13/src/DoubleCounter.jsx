import {useReducer} from 'react';
const initialState = {countA: 0, countB: 0};
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementA':
      return {...state, countA: state.countA + 1};
      case 'decrementA':
      return {...state, countA: state.countA - 1};
    case 'incrementB':
      return {...state, countB: state.countB + 1};
    case 'decrementB':
      return {...state, countB: state.countB - 1};
      case 'reset':
      return initialState;
    default:
      return state;
  }
};

function DoubleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count A: {state.countA}</p>
      <p>Count B: {state.countB}</p>
      <button onClick={() => dispatch({type: 'incrementA'})}>Increment A</button>
        <button onClick={() => dispatch({type: 'decrementA'})}>Decrement A</button>
      <button onClick={() => dispatch({type: 'incrementB'})}>Increment B</button>
        <button onClick={() => dispatch({type: 'decrementB'})}>Decrement B</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  );
}

export default DoubleCounter;

