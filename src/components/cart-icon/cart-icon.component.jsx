import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <Cart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDistpacthToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDistpacthToProps)(CartIcon);
