import { useState, useEffect } from "react";

import Product from "./Product";
import Sort from "./Sort";

const headers = [
  {
    name: "Id",
    value: "id",
  },
  {
    name: "Nombre",
    value: "name",
  },
  {
    name: "Precio",
    value: "price",
  },
  {
    name: "Descuento",
    value: "discount",
  },
  {
    name: "Descripción",
    value: "description",
  },
  {
    name: "Stock",
    value: "stock",
  },
  {
    name: "Marca",
    value: "brand",
  },
  {
    name: "Categoría",
    value: "category",
  },
];

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortCount, setSortCount] = useState(0);
  const [originalElements, setOriginalElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/products`)
      .then((res) => res.json())
      .then((elements) => {
        setOriginalElements(elements.productDetail);
        setFilteredElements(elements.productDetail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let filteredElements = originalElements.filter((element) =>
      element.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredElements(filteredElements);
  }, [searchValue]);

  useEffect(() => {
    let sortedElements = [...filteredElements];
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
    setFilteredElements(sortedElements);
  }, [sortCount]);

  const handleSort = (value) => {
    setSortType(value);
    setSortCount(sortCount + 1);
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 font-weight-bold">Buscar</h1>
        <div className="flex-fill text-center">
          <input
            type="text"
            onChange={handleOnChange}
            value={searchValue}
            placeholder="Buscar productos..."
            className="col-4 card shadow d-inline-block text-dark"
          />
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            {filteredElements.length !== 0 ? (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    {headers.map((header, index) => (
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
                  {filteredElements.map((element, index) => (
                    <Product {...element} key={index} />
                  ))}
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

export default Search;
