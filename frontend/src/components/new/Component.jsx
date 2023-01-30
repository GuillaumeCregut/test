import PropTypes from "prop-types";

function Component({ toto }) {
  return <div>Hello World ! 2 {toto}</div>;
}

Component.propTypes = {
  toto: PropTypes.number.isRequired,
};

export default Component;
