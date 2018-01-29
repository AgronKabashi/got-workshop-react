import React from "react";
import PropTypes from "prop-types";

export const Header = ({ children }) =>
  <div>
    {children}
  </div>;

Header.propTypes = {
  children: PropTypes.node
};
