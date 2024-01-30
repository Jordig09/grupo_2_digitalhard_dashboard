import ContentRowProducts from "./ContentRowProducts";
import ElementsInDB from "./ElementsInDB";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 font-weight-bold">
          App Dashboard
        </h1>
      </div>
      {/* <!-- Content Row Movies--> */}
      <ContentRowProducts />
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
        {/* <!-- Genres in DB --> */}
        <ElementsInDB title="Categorías" propertyName="categoriesDetail" />
        <ElementsInDB title="Marcas" propertyName="brands" />
      </div>
    </div>
  );
}

export default ContentRowTop;
