import { useEffect, useState } from "react";

function Sort(props) {
  const [filterOver, setFilterOver] = useState(false);

  const handleSortChange = (value) => {
    props.handleSort(value);
  };

  const handleMouseOver = () => {
    setFilterOver(!filterOver);
  };

  return (
    <div
      className="d-sm-flex align-items-center justify-content-between"
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      {props.name}
      <i
        className={`fas fa-fw ${
          props.sortCount % 2 === 0 ? "fa-arrow-down" : "fa-arrow-up"
        } ${filterOver ? "" : "text-hidden"}`}
        onClick={() => handleSortChange(props.value)}
      ></i>
    </div>
  );
}

export default Sort;
