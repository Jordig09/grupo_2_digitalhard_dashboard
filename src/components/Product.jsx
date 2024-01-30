import PropTypes from "prop-types";

function Product(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.discount}</td>
      <td>{props.description}</td>
      <td>{props.stock}</td>
      <td>{props.brand}</td>
      <td>{props.category}</td>
    </tr>
  );
}

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  discount: PropTypes.number,
  description: PropTypes.string,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
};

export default Product;
