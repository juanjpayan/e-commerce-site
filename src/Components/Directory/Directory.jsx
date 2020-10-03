import React from 'react';
import MenuItem from '../Menu-Item/Menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/Directory/DirectorySelector';
import '../Directory/Directory.scss';

const Directory = ({ sections }) => {
	return (
		<div className="directory-menu">
			{sections.map(({ title, imageUrl, id, size }) => (
				<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
