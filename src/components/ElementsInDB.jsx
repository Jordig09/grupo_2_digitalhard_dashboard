import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Element from "./Element";

function ElementsInDB(props) {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/products`)
      .then((res) => res.json())
      .then((elements) => {
        setElements(elements[props.propertyName]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow pb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Listado de {props.title}
          </h5>
        </div>
        <div className="px-4 pt-4 vh-50 overflow-auto">
          <div className="row g-4">
            {elements.length !== 0 ? (
              elements.map((element, index) => (
                <Element name={element.name} key={index} />
              ))
            ) : (
              <div className="ml-2">
                <p>Resultados no disponibles</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ElementsInDB.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ElementsInDB;
