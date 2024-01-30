import List from "./List";

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
    name: "Productos",
    value: "productCount",
  },
];

function BrandsList() {
  return (
    <List
      endpoint="products"
      propertyName="brands"
      name="Marcas"
      headers={headers}
      listType="Brand"
    />
  );
}

export default BrandsList;
