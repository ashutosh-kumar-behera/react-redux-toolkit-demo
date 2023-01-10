import { useState } from "react";

export const Counter =()=>{
  const [counter, setCounter] = useState(0);
  const amuount = 2;
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(counter + amuount)}>
        Increment by Amount
      </button>
    </div>
  );
}
