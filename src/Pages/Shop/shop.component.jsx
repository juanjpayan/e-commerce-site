import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection';
import { selectCollections } from '../../Redux/Shop/ShopSelector';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
