import React, { useEffect, useState } from 'react';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection';
import SHOP_DATA from './shop.data';

const ShopPage = () => {
	const [ collections, setCollections ] = useState([]);

	useEffect(() => {
		setCollections(SHOP_DATA);
	}, []);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
