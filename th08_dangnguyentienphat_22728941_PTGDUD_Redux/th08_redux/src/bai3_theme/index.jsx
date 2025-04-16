import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice
const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggleTheme: (state) => (state === "light" ? "dark" : "light"),
  },
});

const { toggleTheme } = themeSlice.actions;

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

// UI Component
function ThemeApp() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>
        <button
          onClick={() => dispatch(toggleTheme())}
          className={`px-6 py-2 rounded ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          Đổi Giao Diện
        </button>
      </div>
    </div>
  );
}

// Component xuất ra dùng trong App.jsx
export default function FReduxToolKitTheme() {
  return (
    <Provider store={store}>
      <ThemeApp />
    </Provider>
  );
}
