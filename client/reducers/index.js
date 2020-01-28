import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux';


// Import other Reducers to combine
import posts from './posts';
import comments from './comments';


// create a root reducer for creating store
const rootReducer = combineReducers({
	posts,
	comments,
	routing: routerReducer
});

export default rootReducer;