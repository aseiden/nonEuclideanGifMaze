import React from 'react';

var Gif = (props) => {

  var handleSubmit = () => {
    var searchString = document.getElementsByClassName('gifSearchInput')[0].value;
    props.handleGifSearch(searchString);
  };

  if (props.isNoGif) {
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
      <img src={props.currentGif}></img>
    );
  }  

  

};

export default Gif;