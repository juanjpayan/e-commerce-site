import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publicKey =
		'pk_test_51HaBKAIgfLOssrsLubIvWLrnVQ5GtnZYeQfOJL5D5j18kqkAksSzIFAVcvFFEGWn0rfUPpabAdz7PxumVvoMO3u50019TOMUev';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<div>
			<StripeCheckout
				label="Pay Now"
				name="E-Commerce"
				billingAddress
				shippingAddress
				image="https://sendeyo.com/up/d/f3eb2117da"
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel="Pay Now"
				token={onToken}
				stripeKey={publicKey}
			/>
		</div>
	);
};

export default StripeButton;
