import React from "react";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CardContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  );
}
export default App;
