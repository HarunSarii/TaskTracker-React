import React from "react";
import Button from "./Button";
//import PropTypes from 'prop-types';

const Header = ({ title, showAddTask, toggleShow }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </header>
  );
};

// Header.defaultProps = {
//   title: 'Task Tracker',
// };

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// };

export default Header;
