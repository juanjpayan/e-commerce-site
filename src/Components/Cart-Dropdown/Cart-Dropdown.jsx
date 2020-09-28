import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../Redux/Cart/CartSelectors';
import CartItem from '../Cart-Item/Cart-Item';
import CustomButton from '../Custom-Button/Custom-Button';
import './Cart-Dropdown.scss';

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
