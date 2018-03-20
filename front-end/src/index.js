import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompanyPage from './Companypage';

ReactDOM.render(
    <Router >
        <div>
            <Route exact path="/" component={App} ></Route>
            <Route path="/company/:id" component={CompanyPage} />
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
