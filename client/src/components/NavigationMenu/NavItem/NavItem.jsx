import React from 'react';
import { Link } from 'react-router-dom';

import './navItemStyle.scss';
function NavItem(props) {
  return (
    <div className="items">
      {props.title ? (
        <h3>{props.title}</h3>
      ) : (
        <i className={props.leftIcon}></i>
      )}
      <Link to={`/${props.linkTo}`}>
        <i className={props.icon}></i>
      </Link>
    </div>
  );
}

export default NavItem;
