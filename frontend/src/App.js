import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import EventsPage from './components/EventsPage';
import EventDetails from './components/EventDetails';
import Profile from './components/Profile';
import EventForm from './components/EventForm';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/auth/:mode" component={AuthPage} />
                    <Route exact path="/events" component={EventsPage} />
                    <Route path="/events/create" component={EventForm} />
                    <Route path="/events/:id" component={EventDetails} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;