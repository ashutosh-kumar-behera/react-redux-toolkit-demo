import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "../slices/counter";

export const Counter =()=>{
//   const [counter, setCounter] = useState(0);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const amuount = 2;
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
}
