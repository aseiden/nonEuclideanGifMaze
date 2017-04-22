import React from 'react';

var Caption = (props) => {

  if (props.isNewRoom) {
    return (
      <div>
        <p className="caption">
          {props.caption}
        </p> 
        <input
          type="textarea"
          class="captionInput"
        ></input>
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