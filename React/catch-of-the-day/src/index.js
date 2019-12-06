import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/style.css';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound'

const Root = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={StorePicker} />
                    <Route exact path="/store/:storeId" component={App} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
render(<Root/>, document.querySelector('#main'))