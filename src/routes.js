import React from 'react';
import {BrowserRouter ,Route, Switch, } from 'react-router-dom';

import Login from './pages/Login/Login'
import Main from './pages/Main/Main'
import Detalhe from './pages/Detalhe/Detalhe'

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Main} />
            <Route path='/detalhe' component={Detalhe} />            
        </Switch>
    </BrowserRouter>

export default Routes;