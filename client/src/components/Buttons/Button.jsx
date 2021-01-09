import React from 'react';

function Button(props) {
  return (
    <div>
      <button type="submit">
        <i class={props.icon}></i>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
