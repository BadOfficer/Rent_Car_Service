import { FaArrowRight } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import CartButton from "./CartButton";
const Cart = ({ setCartActive, cartList, onRentCar }) => {
  return (
    <div className="cart">
      <button className="cart_close" onClick={() => setCartActive(false)}>
        <IoMdClose />
      </button>
      <div className="cart_title">
        <h4>Order</h4>
        <h4>Price</h4>
      </div>
      <div className="cart_list">
        {cartList.length === 0 ? (
          <p className="cart_empty">Cart is empty</p>
        ) : (
          cartList.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        )}
      </div>
      {cartList.length !== 0 && (
        <CartButton onClick={onRentCar}>
          <span>Checkout</span>
          <span>
            <FaArrowRight />
          </span>
        </CartButton>
      )}
    </div>
  );
};

export default Cart;
