import "./App.css";
import FReduxToolKitCounter from "./bai1_counterApp";
import FReduxToolKitTodo from "./bai2_todolist";
import FReduxToolKitTheme from "./bai3_theme";
import FReduxToolKitCart from "./bai4_tinhtien";
import FReduxToolKitAuth from "./bai5_login";
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
      <FReduxToolKitTheme />
      <FReduxToolKitCart />
      <FReduxToolKitAuth />
    </>
  );
}

export default App;
