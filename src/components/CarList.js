import Select from "./Select";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import Car from "./Car";
import Button from "./Button";
import { useState } from "react";
import Budget from "./Budget";
const CarList = ({
  cars,
  onCartClick,
  onAddCarClick,
  cartList,
  addCartItem,
  money,
}) => {
  const options = ["Price", "Title", "Added"];
  const [selectValue, setSelectValue] = useState(options[0]);
  let sortedCars;
  selectValue === "Price"
    ? (sortedCars = cars.slice().sort((a, b) => a.price - b.price))
    : selectValue === "Title"
    ? (sortedCars = cars.slice().sort((a, b) => a.title.localeCompare(b.title)))
    : (sortedCars = cars.slice().reverse());
  return (
    <div className="cars_list">
      <div className="cars_list-control">
        <h2 className="cars_list-title">
          Car Catalogue<span>Choose your car</span>
        </h2>
        <Budget money={money} />
        <Select
          options={options}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        <div className="cart_container">
          <span className="cart_bought">{cartList.length}</span>
          <Button onClick={onCartClick}>
            <FaCartShopping />
          </Button>
        </div>
        <Button onClick={onAddCarClick}>
          <IoMdAdd />
        </Button>
      </div>
      <div className="cars">
        {sortedCars.map((car) => (
          <Car car={car} key={car.id} addCartItem={addCartItem} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
