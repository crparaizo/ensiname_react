import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/landing/landingPage'
import Login from './pages/login/login'
import Aluno from './pages/cadastro_aluno/cadastroAluno'
import Professor from './pages/cadastro_prof/cadastroProf'
import Aula from './pages/aula/aula'
import NovaConta from './pages/nova_conta/nova_conta'
import NaoEncontrada from './pages/naoencontrada/naoencontrada'

import Testando from './pages/landing/teste'

const rotas = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/aluno" component={Aluno} />
                <Route exact path="/professor" component={Professor} />
                <Route exact path="/aula" component={Aula} />
                <Route exact path="/teste" component={Testando} />
                <Route exact path="/new_account" component={NovaConta} />
                <Route component={NaoEncontrada} /> {/* Esse é o default do Switch, nenhuma outra Route será lida dps disso */}
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();