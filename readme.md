# Learn Redux [a Super Sexy Course by Wes Bos]

A simple React + Redux implementation.
This will be turned into a free video series once the app is totally fleshed out.
In this entire video series, I've created a Application same like Instagram named "Reduxtagram" along with Wes Bos.

## Run on your Local Machine

First `npm install` to grab all the necessary dependencies. 

Then run `npm start` and open <localhost:7770> in your browser.

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.


## Summery: (as I learned) :-

### Store:- 
Store is just a JavaScript Object which contains all data/state information.
There's a super magical Method came from Redux called `createStore()` to create a Store.
It is Read only. we just can change state by dispatching an action and tell Reducer to do it.
Store is the main wrapper for all Components to get access on it from any component.

#### Examples:-
<pre><code>
	import { createStore, compse } from 'redux';
	import { syncHistoryWithStore} from 'react-router-redux';
	import { browserHistory } from 'react-router';

	// import the root reducer
	import rootReducer from './reducers/index';

	import comments from './data/comments';
	import posts from './data/posts';

	// create an object for the default data
	const defaultState = {
	  posts,
	  comments
	};

	const store = createStore(rootReducer, defaultState);

	export const history = syncHistoryWithStore(browserHistory, store);

	export default store;
</code></pre>


### Actions:-
Actions are like JavaScript Events(keypress,move,hover.. etc).
Actions must have a type property to tell Redux what type of event should be happend.
	
#### Examples:-
<pre><code>
	// Increment Likes Action
	function increment(index) {
		return {
			type: 'INCREMENT_LIKES',
			index
		}
	}

	// Add Comment Action
	function addComment(postId, author, comment) {
		return {
			type: 'ADD_COMMENT',
			postId,
			author,
			Comment
		}
	}
</code></pre>

### Reducer:- 
Reducers are pure functions which takes our Redux State and Actions as it's Parameter and return a new copy of State with some modifications to change Store (State). [Store is Read only].

#### Examples:-
<pre><code>
	function posts(state = [], action) {
		if(action.type == 'INCREMENT_LIES') {
			// Do Some Modifictions here
		}
		return state;
	}
</code></pre>

--- We Combine Reducers and Create rootReducers to create Store. ---
<pre><code>
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
</code></pre>


## Reducers are the main weapon to change our state by dispatching (Triggering) and Action.

