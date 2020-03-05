import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action.js";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <Cart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDistpatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(CartIcon);
