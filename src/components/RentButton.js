const RentButton = ({ children, onClick, carObj }) => {
  return (
    <button className="rent-button" onClick={() => onClick(carObj)}>
      {children}
    </button>
  );
};

export default RentButton;
