import React from 'react';

import { render } from 'react-dom';

// Import Router
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';


// Control Routing
const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
        </Route>
    </Router>
)


render(router, document.querySelector('#root'));
