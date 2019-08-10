import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

export default function Routes() {
    return (
        <Router>
            <Route path="/" exact component={Login} />
            <Route path="/main" component={Main} />
        </Router>
    )
}

