import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearcart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold p-2">Your Cart</h1>
      <div className="flex">
        <div className="w-6/12 m-auto">
          {cartItems.length === 0 && (
            <h1 className="text-2xl">
              Your cart is empty! please add some items
            </h1>
          )}
          <ItemList items={cartItems} />
        </div>
        <div className={cartItems.length === 0 ? "hidden" : "block"}>
          <button
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearcart}
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
