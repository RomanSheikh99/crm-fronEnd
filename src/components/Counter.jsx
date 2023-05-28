import { useDispatch, useSelector } from "react-redux";
import { action } from "../store/store";

export const Counter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { incremented, decremented, reset, incresByValue } = action;

  return (
    <div className="counter">
      <h2>Count is {state.count}</h2>
      
      <div className="card">
        <button onClick={() => dispatch(incremented())}>Incremented</button>
        <button onClick={() => dispatch(decremented())}>Decremented</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incresByValue(5))}>
          incresByValue
        </button>
      </div>
    </div>
  );
};
