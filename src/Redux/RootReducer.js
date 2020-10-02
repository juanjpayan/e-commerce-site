import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import cartReducer from './Cart/CartReducer';
import userReducer from './User/UserReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart' ]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
