import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/logo.svg';
import './Header.scss';
import { auth } from '../../Firebase/Firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../Cart-Icon/Cart-Icon';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/UserSelector';
import { selectCartHidden } from '../../Redux/Cart/CartSelectors';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/shop">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
