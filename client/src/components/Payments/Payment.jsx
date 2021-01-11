import React from 'react';
import Button from '../Buttons/Button';
import { navLinks } from '../NavigationMenu/links';
import NavItem from '../NavigationMenu/NavItem/NavItem';

import './paymentStyle.scss';

function Payment() {
  const [navItems] = React.useState([...navLinks]);
  return (
    <div className="payment">
      <div className="payment__columns">
        <i className="fas fa-long-arrow-alt-left icons"></i>
        <h3>Payment</h3>
      </div>
      <div className="payment__columns">
        <div className="payment__column">
          <h3>aJIT Cash</h3>
          <div className="payment__data">
            <h1>NGN 5700.00</h1>
            <i class="fas fa-chevron-right card-arrow icons"></i>
          </div>
          <div className="payment-button">
            <Button icon="fas fa-plus">Add Funds</Button>
          </div>
        </div>
        <div className="payment-text">Payment Methods</div>
      </div>
      <div className="payment__columns">
        {navItems.map((item, index) => (
          <div className="nav-item payment-process">
            <NavItem
              key={index}
              leftIcon={'fab fa-cc-visa payment-icons payment-left-icon icons'}
              linkTo={'mmmmmmmmmmmmm'}
              icon={
                'fas fa-chevron-right payment-icons payment-right-icon icons'
              }
            />
          </div>
        ))}
        <div className="nav-item payment-process">Add Payment Method</div>
      </div>
    </div>
  );
}

export default Payment;
