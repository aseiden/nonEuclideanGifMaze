import React from 'react';

var Caption = (props) => {

  var handleSubmit = () => {
    var caption = document.getElementsByClassName('captionInput')[0].value;
    props.handleCaptionSubmit(caption);
  };

  if (props.isNewRoom) {
    return (
      <div>
        <p className="caption">
          {props.caption}
        </p>
        <form
          onSubmit={
            (e) => {
              e.preventDefault();
              handleSubmit();
            }
          }
        > 
          <input
            type="textarea"
            className="captionInput"
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <p className="caption">
        {props.caption}
      </p> 
    );
  }

};

export default Caption;