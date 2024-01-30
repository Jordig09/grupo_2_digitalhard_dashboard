import PropTypes from "prop-types";

function Element(props) {
  return (
    <div className="col-lg-12 mb-2">
      <div className="card bg-gray-200 text-gray-600 font-weight-bold">
        <div className="p-2">{props.name}</div>
      </div>
    </div>
  );
}

Element.propTypes = {
  name: PropTypes.string,
};

export default Element;
