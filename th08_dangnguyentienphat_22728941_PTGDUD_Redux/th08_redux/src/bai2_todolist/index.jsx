import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// Slice
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },
  },
});

const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

// UI Component
function TodoApp() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto border mt-10">
      <h2 className="text-2xl font-bold mb-4">Redux Toolkit - Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border px-3 py-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button onClick={handleAdd} className="border px-4 py-1">
          Thêm
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center border px-3 py-2 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className="cursor-pointer flex-1"
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500 text-sm"
            >
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component xuất ra dùng trong App.jsx
export default function FReduxToolKitTodo() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
