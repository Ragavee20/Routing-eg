import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './Users'
import Contact from './Contacts'


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Users">Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Users" component={Users} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'))
