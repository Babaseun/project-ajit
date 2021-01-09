import React from 'react';
import './Harmburger.scss';
function Hamburger(props) {
  return (
    <div className={props.display}>
      <i
        className={`fa fa-bars`}
        aria-hidden="true"
        onClick={props.navMenuClicked}
      ></i>
    </div>
  );
}

export default Hamburger;
