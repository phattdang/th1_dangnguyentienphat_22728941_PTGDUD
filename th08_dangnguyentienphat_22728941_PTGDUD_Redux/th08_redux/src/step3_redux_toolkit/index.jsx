import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setResult } from "./resultSlice";
import { store } from "./store";
import { Provider } from "react-redux";

function CalculatorApp() {
  const aValue = useRef();
  const bValue = useRef();
  const result = useSelector((state) => state.result.value);
  const dispatch = useDispatch();

  const handleClick = (operation) => {
    const a = Number(aValue.current.value);
    const b = Number(bValue.current.value);
    let calcResult = 0;

    if (operation === "+") {
      calcResult = a + b;
    } else if (operation === "-") {
      calcResult = a - b;
    } else if (operation === "x") {
      calcResult = a * b;
    } else if (operation === "/") {
      calcResult = a / b;
    }

    dispatch(setResult(calcResult));
  };

  return (
    <>
      <p className="text-5xl font-semibold mb-4">Step 3 - Redux Toolkit</p>
      <div className="calculater grid grid-cols-2 grid-rows-4 gap-5 p-3 border border-gray-500">
        <input
          ref={aValue}
          className="col-span-1 row-span-1 px-3 border border-gray-500"
          type="text"
          placeholder="A value"
        />
        <input
          ref={bValue}
          className="col-span-1 row-span-1 px-3 border border-gray-500"
          type="text"
          placeholder="B value"
        />
        <button
          onClick={() => handleClick("+")}
          className="col-span-1 row-span-1 border border-gray-500"
        >
          +
        </button>
        <button
          onClick={() => handleClick("-")}
          className="col-span-1 row-span-1 border border-gray-500"
        >
          -
        </button>
        <button
          onClick={() => handleClick("x")}
          className="col-span-1 row-span-1 border border-gray-500"
        >
          x
        </button>
        <button
          onClick={() => handleClick("/")}
          className="col-span-1 row-span-1 border border-gray-500"
        >
          /
        </button>
        <input
          value={result}
          className="col-span-2 row-span-1 px-3 border border-gray-500"
          type="text"
          placeholder="Result"
          readOnly
        />
      </div>
    </>
  );
}

export default function FReduxToolKitCalc() {
  return (
    <Provider store={store}>
      <CalculatorApp />
    </Provider>
  );
}
