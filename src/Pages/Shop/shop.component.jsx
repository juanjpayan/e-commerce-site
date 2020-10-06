import React from 'react';
import CollectionsOverview from '../../Components/Collections-Overview/CollectionsOverview';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			<CollectionsOverview />
		</div>
	);
};

export default ShopPage;
