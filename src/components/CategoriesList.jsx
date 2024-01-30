import List from "./List";

const headers = [
  {
    name: "Id",
    value: "id",
  },
  {
    name: "Categoría",
    value: "category",
  },
  {
    name: "Id Subcategoría",
    value: "subcategory_id",
  },
  {
    name: "Subcategoría",
    value: "name",
  },
  {
    name: "Productos",
    value: "productCount",
  },
];

function CategoriesList() {
  return (
    <List
      endpoint="products"
      propertyName="categoriesDetail"
      name="Categorías"
      headers={headers}
      listType="Category"
    />
  );
}

export default CategoriesList;
