import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Layout from '../layouts/layout';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Posts from '../pages/posts';
import Users from '../pages/users';

const Routes = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <PrivateRoute exact path="/">
                        <Layout>
                            <Dashboard/>
                        </Layout>
                    </PrivateRoute>
                    <PrivateRoute path="/users" component={() => <Layout>
                        <Users/>
                    </Layout>} />
                    <PrivateRoute path={'/posts'} component={() => <Layout>
                        <Posts/>
                    </Layout>} />
                    <Route exact path="*" component={() => <h1>Page not found</h1> } />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default Routes;