import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Select = ({ options, selectValue, setSelectValue }) => {
  const [selectActive, setSelectActive] = useState(false);
  const handleSelectActive = () => {
    setSelectActive((state) => (state === false ? true : false));
  };
  return (
    <div className={`select ${selectActive ? "active" : ""}`}>
      <div className="select_value" onClick={handleSelectActive}>
        {selectValue}
        <span>
          {!selectActive ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </span>
      </div>
      {selectActive && (
        <ul className="select_dropdown">
          {options.map((option) => (
            <li
              className="select_option"
              onClick={() => {
                setSelectActive(false);
                setSelectValue(option);
              }}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
