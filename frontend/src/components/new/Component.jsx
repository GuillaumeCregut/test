import PropTypes from "prop-types";

function Component({ toto }) {
  return <div>Hello World ! {toto}</div>;
}

Component.propTypes = {
  toto: PropTypes.number.isRequired,
};

export default Component;
