import "./App.css";
import FReduxToolKitCounter from "./bai1_counterApp";
import FReduxToolKitTodo from "./bai2_todolist";
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
      <FReduxToolKitTodo />
    </>
  );
}

export default App;
