import { useState } from "react";
import CarList from "./CarList";
import Cart from "./Cart";
import AddCar from "./AddCar";
const cars = [
  {
    id: 1,
    title: "Audi Q5",
    price: 25,
    gearbox: "Avtomatic",
    seats: 5,
    fuel: "Petrol 95",
    img: "./images/cars/Audi_Q5.png",
  },
  {
    id: 2,
    title: "VW Tiguan",
    price: 20,
    gearbox: "Avtomatic",
    seats: 5,
    fuel: "Petrol 95",
    img: "./images/cars/VW_Tiguan.png",
  },
];

const App = () => {
  const [cartActive, setCartActive] = useState(false);
  const [addCarActive, setAddCarActive] = useState(false);
  const [carsList, setCarsList] = useState(cars);
  const [cartList, setCartList] = useState([]);
  const [money, setMoney] = useState(150);
  const handleCartClick = () => {
    setCartActive(true);
  };
  const handleAddCarClick = () => {
    setAddCarActive(true);
  };
  const handleBackgroundClick = () => {
    setAddCarActive(false);
    setCartActive(false);
  };
  const handleAddCar = (car) => {
    setCarsList((carsList) => [...carsList, car]);
    setAddCarActive(false);
  };
  const addCartItem = (car) => {
    if (cartList.includes(car)) {
      setCartList([...cartList]);
    } else {
      setCartList((cartList) => [...cartList, car]);
    }
  };
  const handleRentCar = () => {
    const total = cartList.reduce((acc, cur) => acc + cur.price, 0);
    if (money < total) return;

    setMoney((money) => money - total);
    setCartList([]);
    setCartActive(false);
  };
  return (
    <>
      {addCarActive && <AddCar onAddCar={handleAddCar} />}
      {(cartActive || addCarActive) && (
        <div className="background" onClick={handleBackgroundClick}></div>
      )}
      <div className="container">
        {cartActive && (
          <Cart
            setCartActive={setCartActive}
            cartList={cartList}
            onRentCar={handleRentCar}
          />
        )}
        <CarList
          cars={carsList}
          onCartClick={handleCartClick}
          onAddCarClick={handleAddCarClick}
          cartList={cartList}
          addCartItem={addCartItem}
          money={money}
        />
      </div>
    </>
  );
};

export default App;
