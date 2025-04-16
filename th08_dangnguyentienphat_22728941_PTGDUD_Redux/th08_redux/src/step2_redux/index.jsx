import { useRef } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

function calculatorReducer(state = 0, action) {
  switch (action.type) {
    case "+":
      return action.payload.a + action.payload.b;
    case "-":
      return action.payload.a - action.payload.b;
    case "x":
      return action.payload.a * action.payload.b;
    case "/":
      return action.payload.a / action.payload.b;
    default:
      return state;
  }
}

const store = createStore(calculatorReducer);

function CalculatorApp() {
  const aRef = useRef();
  const bRef = useRef();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);

  const handleCalc = (type) => {
    const a = Number(aRef.current.value);
    const b = Number(bRef.current.value);
    dispatch({ type: type, payload: { a, b } });
  };

  return (
    <>
      <p className="text-5xl font-semibold mb-4">Step 2 - Redux</p>
      <div className="calculater grid grid-cols-2 grid-rows-4 gap-5 p-3 border border-gray-500">
        <input
          ref={aRef}
          className="px-3 border border-gray-500"
          type="text"
          placeholder="A value"
        />
        <input
          ref={bRef}
          className="px-3 border border-gray-500"
          type="text"
          placeholder="B value"
        />
        <button
          onClick={() => handleCalc("+")}
          className="border border-gray-500"
        >
          +
        </button>
        <button
          onClick={() => handleCalc("-")}
          className="border border-gray-500"
        >
          -
        </button>
        <button
          onClick={() => handleCalc("x")}
          className="border border-gray-500"
        >
          x
        </button>
        <button
          onClick={() => handleCalc("/")}
          className="border border-gray-500"
        >
          /
        </button>
        <input
          value={result}
          readOnly
          className="col-span-2 px-3 border border-gray-500"
          placeholder="Result"
        />
      </div>
    </>
  );
}

export default function FReduxCalc() {
  return (
    <Provider store={store}>
      <CalculatorApp />
    </Provider>
  );
}
