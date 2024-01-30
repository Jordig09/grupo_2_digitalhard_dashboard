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

function ProductsListTest() {
  return (
    <List
      endpoint="products"
      propertyName="productDetail"
      name="Productos"
      headers={headers}
      listType="Product"
    />
  );
}

export default ProductsListTest;
