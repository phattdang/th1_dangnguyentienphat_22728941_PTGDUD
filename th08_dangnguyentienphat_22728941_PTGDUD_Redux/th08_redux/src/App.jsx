import "./App.css";
import FReduxToolKitCounter from "./bai1_counterApp";
import FUseReducer from "./step1_useReducer";
import FReduxCalc from "./step2_redux";
import FReduxToolKitCalc from "./step3_redux_toolkit";

function App() {
  return (
    <>
      <FUseReducer />
      <FReduxCalc />
      <FReduxToolKitCalc />
      <FReduxToolKitCounter />
    </>
  );
}

export default App;
