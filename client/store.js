import {createStore, compose} from 'redux'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'


// Import Root Reducer to create a store
import rootReducer from './reducers/index'

// Import Actual Data
import posts from './data/posts'
import comments from './data/comments'

// Create a object for default data
const defaultData = {
	posts,
	comments
};

// Create Store Object
const store = createStore(rootReducer, defaultData)

// Create Browser History
export const history = syncHistoryWithStore(browserHistory, store);


export default store;