import { useState, useEffect } from "react";
import Product from "./Product";
import Category from "./Category";
import Brand from "./Brand";
import Sort from "./Sort";
import User from "./User";

function List(props) {
  const [elements, setElements] = useState([]);
  const [sortType, setSortType] = useState("");
  const [sortCount, setSortCount] = useState(0);
  const [idCounts, setIdCounts] = useState({});

  const DynamicComponent = {
    Product,
    Category,
    Brand,
    User,
  }[props.listType];

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/${props.endpoint}`)
      .then((res) => res.json())
      .then((elements) => {
        setElements(elements[props.propertyName]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const newIdCounts = {};
    elements.forEach((element) => {
      newIdCounts[element.id] = (newIdCounts[element.id] || 0) + 1;
    });
    setIdCounts(newIdCounts);
  }, [elements]);

  useEffect(() => {
    let sortedElements = [...elements];
    if (sortType === "price") {
      sortedElements = sortedElements.map((element) => ({
        ...element,
        price: Number(element.price),
      }));
    }
    if (sortCount % 2 === 0) {
      sortedElements.sort((a, b) => {
        if (
          typeof a[sortType] === "number" &&
          typeof b[sortType] === "number"
        ) {
          return a[sortType] - b[sortType];
        } else {
          return String(a[sortType]).localeCompare(String(b[sortType]));
        }
      });
    } else {
      sortedElements.sort((a, b) => {
        if (
          typeof a[sortType] === "number" &&
          typeof b[sortType] === "number"
        ) {
          return b[sortType] - a[sortType];
        } else {
          return String(b[sortType]).localeCompare(String(a[sortType]));
        }
      });
    }
    setElements(sortedElements);
  }, [sortCount]);

  const handleSort = (value) => {
    setSortType(value);
    setSortCount(sortCount + 1);
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
          Listado de {props.name}
        </h1>
      </div>

      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            {elements.length !== 0 ? (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    {props.headers.map((header, index) => (
                      <th key={index}>
                        <Sort
                          name={header.name}
                          value={header.value}
                          handleSort={handleSort}
                          sortCount={sortCount}
                        />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {elements.map((element, index) => {
                    const isSameAsPrev =
                      index > 0 && element.id === elements[index - 1].id;
                    return (
                      <DynamicComponent
                        {...element}
                        key={index}
                        rowSpan={isSameAsPrev ? "1" : idCounts[element.id]}
                        isSameAsPrev={isSameAsPrev}
                      />
                    );
                  })}
                </tbody>
              </table>
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

export default List;
