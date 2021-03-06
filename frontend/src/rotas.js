import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Duo from	'./components/duo_page';
import Cadastro from './components/cadastro';
import Login from './components/login';


export default class Rotas extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Duo} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>            
            );
    }
    

}