import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
    },
  },
});

const { addItem, removeItem, updateQuantity } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// UI Component
function CartApp() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  const dummyProduct = {
    id: 1,
    name: "Sản phẩm A",
    price: 100,
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <p className="text-3xl font-bold mb-4">🛒 Giỏ hàng</p>

      <button
        onClick={() => dispatch(addItem(dummyProduct))}
        className="mb-4 px-4 py-2 bg-blue-600 text-black rounded border"
      >
        Thêm Sản Phẩm A
      </button>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border p-3 rounded mb-3 flex items-center justify-between"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>Giá: {item.price} x</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              className="w-16 border px-1 mt-1"
            />
          </div>
          <button
            onClick={() => dispatch(removeItem(item.id))}
            className="text-red-600 font-bold"
          >
            X
          </button>
        </div>
      ))}

      <div className="mt-4 border-t pt-2">
        <p>Tổng số lượng: {totalQuantity}</p>
        <p>Tổng tiền: {totalPrice}đ</p>
      </div>
    </div>
  );
}

// Component xuất ra dùng trong App.jsx
export default function FReduxToolKitCart() {
  return (
    <Provider store={store}>
      <CartApp />
    </Provider>
  );
}
