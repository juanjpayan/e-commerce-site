import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../Redux/Shop/ShopSelector';
import './Collection.scss';

const Collection = ({ collection }) => {
	return (
		<div className="collection-page">
			<h2>COLLECTION PAGE</h2>
		</div>
	);
};

const mapStatetoProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStatetoProps)(Collection);
