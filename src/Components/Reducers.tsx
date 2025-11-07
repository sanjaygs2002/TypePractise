import { useReducer } from "react";

// Define the state interface
interface State {
  count: number;
}

// Define the action types
type CounterActions =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] };

// Initial state
const initialState: State = { count: 0 };

// Reducer function
function stateReducer(state: State, action: CounterActions): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

// Component
export default function Reducers() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const addFive = () => dispatch({ type: "setCount", value: state.count + 5 });
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={addFive}>Add 5</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
