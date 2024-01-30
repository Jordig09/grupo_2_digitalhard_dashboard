import PropTypes from "prop-types";

function Category(props) {
  return (
    <tr>
      {!props.isSameAsPrev && (
        <>
          <td rowSpan={props.rowSpan} className="align-middle">
            {props.id}
          </td>
          <td rowSpan={props.rowSpan} className="align-middle">
            {props.category}
          </td>
        </>
      )}
      <td>{props.subcategory_id}</td>
      <td>{props.name}</td>
      <td>{props.productCount}</td>
    </tr>
  );
}

Category.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  subcategory_id: PropTypes.number,
  name: PropTypes.string,
  productCount: PropTypes.number,
  rowSpan: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Category;
