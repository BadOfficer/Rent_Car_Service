const CartItem = ({ item }) => {
  return (
    <div className="cart_option">
      <img className="car_img" src={item.img} alt={item.title} />
      <h5>{item.title}</h5>
      <p>$ {item.price}.00</p>
    </div>
  );
};
export default CartItem;
