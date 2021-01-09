import React, { useEffect, useState } from 'react';
import './navStyle.scss';
import NavItem from './NavItem/NavItem';
import { navLinks } from './links';
import axios from 'axios';
function NavigationMenu(props) {
  const [user, setUser] = useState({});
  const [links] = useState([...navLinks]);
  useEffect(() => {
    const key = localStorage.getItem('x-access-token');
    axios
      .get('/api/user', {
        headers: {
          'x-access-token': key,
        },
      })
      .then((res) => setUser(res.data));
  }, []);

  return (
    <div className="navigation">
      <div className="navigation__columns">
        <i
          onClick={props.backArrow}
          className="fas fa-long-arrow-alt-left icons"
        ></i>
      </div>
      <div>
        <div className="navigation__columns">
          <div className="navigation__info">
            <i className="fas fa-user icons"></i>

            <div className="navigation__user-info">
              <div className="user-name">
                <h2 key={user.id}>{`${user.firstName} ${user.lastName}`}</h2>
                <i className="fas fa-star-half-alt icons"></i>
                <i className="fas fa-star icons"></i>
                <i className="far fa-star icons"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="navigation__columns">
          {links.map((link, index) => (
            <div className="nav-item" key={index}>
              <NavItem
                key={index}
                icon={link.icon}
                title={link.title}
                linkTo={link.linkTo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
