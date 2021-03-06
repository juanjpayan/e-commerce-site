import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../Components/Checkout-Item/Checkout-Item';
import StripeButton from '../../Components/Stripe/Stripe-Button';
import { selectCartItems, selectCartTotal } from '../../Redux/Cart/CartSelectors';
import './Checkout.scss';

const Checkout = ({ cartItems, total }) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
			<div className="total">TOTAL: ${total}</div>
			<StripeButton price={total} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
