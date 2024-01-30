import { useState, useEffect } from "react";

import SmallCard from "./SmallCard";
import MediumCard from "./MediumCard";

function LastProduct() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/products`)
      .then((res) => res.json())
      .then((elements) => {
        const sortedProducts = elements.productDetail.sort(
          (a, b) => b.id - a.id
        );
        let id;
        if (sortedProducts.length > 0) {
          id = sortedProducts[0].id;
        }
        fetch(`http://127.0.0.1:3000/api/products/${id}`)
          .then((res) => res.json())
          .then((element) => {
            setProduct(element);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
          Último Producto
        </h1>
      </div>
      <div className="row">
        {/* <!-- Películas en la base de datos --> */}
        <SmallCard
          title="ID"
          color="primary"
          quantity={product.id}
          icon="fa-info"
        />

        {/* <!-- Total awards --> */}
        <MediumCard
          title="Nombre"
          color="success"
          quantity={product.name}
          icon="fa-folder"
        />
        <SmallCard
          title="Precio"
          color="golden"
          quantity={product.price}
          icon="fa-dollar-sign"
        />
        <SmallCard
          title="Descuento"
          color="golden"
          quantity={product.discount}
          icon="fa-percent"
        />
        <SmallCard
          title="Categoría"
          color="golden"
          quantity={product.subcategory}
          icon="fa-list"
        />
        <SmallCard
          title="Marca"
          color="golden"
          quantity={product.brand}
          icon="fa-tag"
        />
        <SmallCard
          title="Fecha de Creación"
          color="danger"
          quantity={product.createdAt}
          icon="fa-clock"
        />
        <SmallCard
          title="Última actualización"
          color="danger"
          quantity={product.updatedAt}
          icon="fa-pen"
        />
        <div className="col-lg-6 mb-4">
          <div className="card shadow pb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Descripción
              </h5>
            </div>
            <div className="card-body">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card shadow pb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Especificaciones
              </h5>
            </div>
            <div className="card-body">
              {product.specification &&
                product.specification.map((spec) => (
                  <div key={spec.id} className="p-2">
                    <h6 className="pl-2">{spec.title}</h6>
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Característica</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        {spec.detail &&
                          spec.detail.map((det) => (
                            <tbody key={det.id}>
                              <tr>
                                <td>{det.name}</td>
                                <td>{det.value}</td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastProduct;
