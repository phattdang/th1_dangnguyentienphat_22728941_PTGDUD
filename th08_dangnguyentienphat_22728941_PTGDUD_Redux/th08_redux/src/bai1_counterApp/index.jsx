import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { store } from "./store";

function CounterApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-6 border w-[300px] mx-auto mt-10">
      <h2 className="text-2xl mb-4">Redux Toolkit - Counter App</h2>
      <p className="text-3xl mb-3">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 border"
        >
          Tăng
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 border"
        >
          Giảm
        </button>
      </div>
    </div>
  );
}

export default function FReduxToolKitCounter() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
