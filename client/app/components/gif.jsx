import React from 'react';

var Gif = (props) => {

  var handleSubmit = () => {
    var searchString = document.getElementsByClassName('gifSearchInput')[0].value;
    props.handleGifSearch(searchString);
  };

  if (!props.isNewGif) {
    return (
      <div>
        <p>This is a new room.  There is no Gif... Add one!</p>
        <form
          onSubmit={
            (e) => {
              e.preventDefault();
              handleSubmit();
            }
          }
        >
        <input
            type="text"
            className="gifSearchInput"
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <img src="http://media0.giphy.com/media/JIX9t2j0ZTN9S/giphy-downsized-medium.gif"></img>
    );
  }  

  

};

export default Gif;