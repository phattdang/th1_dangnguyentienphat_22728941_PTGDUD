import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    setUserInfo: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

// UI Component
function AuthApp() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim().toLowerCase() === "admin") {
      dispatch(login({ name: username }));
      setUsername("");
    } else {
      alert("Sai username! Dùng 'admin' nha.");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      {isLoggedIn ? (
        <div>
          <p className="text-xl font-bold mb-2">👋 Xin chào, {user.name}!</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-black px-4 py-2 rounded border"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div>
          <p className="text-xl font-semibold mb-2 text-black">🔐 Đăng nhập</p>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-2 py-1 w-full mb-2"
            placeholder="Tên đăng nhập (gõ admin)"
          />
          <button
            onClick={handleLogin}
            className="bg-green-600 text-black px-4 py-2 rounded w-full border"
          >
            Đăng nhập
          </button>
        </div>
      )}
    </div>
  );
}

// Export cho App.jsx
export default function FReduxToolKitAuth() {
  return (
    <Provider store={store}>
      <AuthApp />
    </Provider>
  );
}
