import { useState, useEffect } from "react";
import Product from "./Product";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/products")
      .then((res) => res.json())
      .then((elements) => {
        const filteredProducts = elements.productDetail.filter(
          (product) => product.discount > 0
        );

        setProducts(filteredProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      {/*<!-- PRODUCTS LIST -->*/}
      <h2 className="h3 mb-2 text-gray-800 ">Productos Destacados</h2>

      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            {products.length !== 0 ? (
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Descripción</th>
                    <th>Stock</th>
                    <th>Marca</th>
                    <th>Categoría</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <Product {...product} key={index} />
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

export default FeaturedProducts;
