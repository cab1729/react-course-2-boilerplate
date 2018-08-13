import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import DashboardPage from '../components/DashboardPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}                                                                                                                                                                              >
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} /> 
                <PrivateRoute path="/dashboard" component={DashboardPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;