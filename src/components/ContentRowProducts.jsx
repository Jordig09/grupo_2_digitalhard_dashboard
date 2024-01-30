import { useState, useEffect } from "react";

import SmallCard from "./SmallCard";

function ContentRowProducts() {
  const [elements, setElements] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/products`)
      .then((res) => res.json())
      .then((elements) => {
        setElements(elements);
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(`http://127.0.0.1:3000/api/users`)
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      {/* <!-- Películas en la base de datos --> */}
      <SmallCard
        title="Productos en base de datos"
        color="primary"
        quantity={elements.count}
        icon="fa-laptop"
      />

      {/* <!-- Total awards --> */}
      <SmallCard
        title="Cantidad de Categorías"
        color="success"
        quantity={elements.subcategoriesCount}
        icon="fa-list"
      />

      {/* <!-- Cantida de Usuarios --> */}
      <SmallCard
        title="Cantidad de usuarios"
        color="golden"
        quantity={users.count}
        icon="fa-user"
      />
    </div>
  );
}

export default ContentRowProducts;
