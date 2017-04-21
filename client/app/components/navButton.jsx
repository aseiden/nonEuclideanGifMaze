import React from 'react';

var NavButton = (props) => {

  return (
    <button className={props.direction} type="button">{props.direction}</button>
  );

};

export default NavButton;