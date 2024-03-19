const Budget = ({ money }) => {
  return (
    <div className="budget">
      <div className="budget_icon">Money:</div>
      <span>{money} $</span>
    </div>
  );
};

export default Budget;
