import { TbManualGearbox } from "react-icons/tb";
import { GiCarSeat } from "react-icons/gi";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import RentButton from "./RentButton";
const Car = ({ car, addCartItem }) => {
  const [cardActive, setCardActive] = useState(false);
  const handleMouseEnter = () => {
    setCardActive(true);
  };
  const handleMouseLeave = () => {
    setCardActive(false);
  };
  return (
    <div
      className={`car ${cardActive ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="car_title">
        <b>{car.title}</b>
      </h3>
      <p className="car_price">
        <span>$</span> <b>{car.price}</b> <span>/day</span>
      </p>
      <div className="car_img-container">
        <img className="car_img" src={car.img} alt={car.title} />
      </div>
      <div className="car_specs">
        {!cardActive ? (
          <>
            <p>
              <TbManualGearbox />
              <span>{car.gearbox}</span>
            </p>
            <p>
              <GiCarSeat />
              <span>{car.seats} Seats</span>
            </p>
            <p>
              <BsFillFuelPumpFill />
              <span>{car.fuel}</span>
            </p>
          </>
        ) : (
          <RentButton onClick={addCartItem} carObj={car}>
            <span>Rent Now</span>
            <span>
              <FaArrowRight />
            </span>
          </RentButton>
        )}
      </div>
    </div>
  );
};

export default Car;
