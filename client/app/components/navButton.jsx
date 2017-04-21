import React from 'react';

var NavButton = (props) => {

  var handleClick = (direction) => {
    props.handleNavClick(direction);
  };

  return (
    <button 
      className={props.direction} 
      type="button"
      onClick={() => handleClick(props.direction)}
    >
      {props.direction}
    </button>
  );

};

export default NavButton;