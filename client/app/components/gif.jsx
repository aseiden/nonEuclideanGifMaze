import React from 'react';

var Gif = (props) => {

  if (props.isNewRoom) {
    return (
      <p>This is a new room.  There is no Gif... Add one!</p>
    );
  } else {
    return (
      <img src="http://media0.giphy.com/media/JIX9t2j0ZTN9S/giphy-downsized-medium.gif"></img>
    );
  }  

  

};

export default Gif;