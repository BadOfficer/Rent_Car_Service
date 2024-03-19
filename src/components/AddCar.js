import { useState } from "react";
import Select from "./Select";

const AddCar = ({ onAddCar }) => {
  const gearboxOptions = ["Avtomatic", "Mechanic"];
  const [carTitle, setCarTitle] = useState("");
  const [carPrice, setCarPrice] = useState("");
  const [carSeats, setCarSeats] = useState("");
  const [carFuel, setCarFuel] = useState("");
  const [carImage, setCarImage] = useState("./images/cars/");
  const [gearboxValue, setGearboxValue] = useState("Avtomatic");
  const onSubmitAddCar = (e) => {
    e.preventDefault();
    if (
      !carTitle ||
      !carPrice ||
      !carSeats ||
      !carFuel ||
      carImage === "./images/cars/"
    ) {
      return;
    }
    const id = crypto.randomUUID();
    const newCar = {
      id,
      title: carTitle,
      price: carPrice,
      gearbox: gearboxValue,
      seats: carSeats,
      fuel: carFuel,
      img: carImage,
    };

    onAddCar(newCar);
    console.log(newCar);
  };
  return (
    <form className="add-car_form" onSubmit={(e) => onSubmitAddCar(e)}>
      <h4>Add Car Form</h4>
      <label>Car Title</label>
      <input
        type="text"
        value={carTitle}
        onChange={(e) => setCarTitle(e.target.value)}
      />
      <label>Car Price</label>
      <input
        type="text"
        value={carPrice}
        onChange={(e) => setCarPrice(Number(e.target.value))}
      />
      <label>Car Gearbox</label>
      <Select
        options={gearboxOptions}
        selectValue={gearboxValue}
        setSelectValue={setGearboxValue}
      />
      <label>Car Seats</label>
      <input
        type="text"
        value={carSeats}
        onChange={(e) => setCarSeats(Number(e.target.value))}
      />
      <label>Car Fuel</label>
      <input
        type="text"
        value={carFuel}
        onChange={(e) => setCarFuel(e.target.value)}
      />
      <label>Car Image</label>
      <input
        type="text"
        value={carImage}
        onChange={(e) => setCarImage(e.target.value)}
      />
      <button className="add-button">Add Car</button>
    </form>
  );
};

export default AddCar;
