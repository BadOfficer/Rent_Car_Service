const RentButton = ({ children, onClick }) => {
  return (
    <button className="rent-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default RentButton;
