import React from 'react';

import { render } from 'react-dom';

// Import Router
import {Router, Route, IndexRoute} from 'react-router'

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import Provider to wrap all components with STORE
import { Provider } from 'react-redux';
import store, {history} from './store'


// Control Routing
const router = (
	<Provider store={store}>
	    <Router history={history}>
	        <Route path="/" component={Main}>
	            <IndexRoute component={PhotoGrid}></IndexRoute>
	            <Route path="/view/:postId" component={Single}></Route>
	        </Route>
	    </Router>
	</Provider>
)


render(router, document.querySelector('#root'));
