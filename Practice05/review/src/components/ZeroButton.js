import React from 'react';
import PropTypes from 'prop-types';


function showNotImplemented() {
  console.warn('This function is not implemented yet.');
}

const ZeroButton = (props) => {
  const { className, children, onClick } = props;
  const extraClass = className || '';
  return (
    <button
      className={`zero-btn ${extraClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


ZeroButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ZeroButton.defaultProps = {
  onClick: showNotImplemented,
};

export default ZeroButton;
