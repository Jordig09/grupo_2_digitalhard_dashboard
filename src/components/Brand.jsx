import PropTypes from "prop-types";

function Brand(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.productCount}</td>
    </tr>
  );
}

Brand.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  productCount: PropTypes.number,
};

export default Brand;
