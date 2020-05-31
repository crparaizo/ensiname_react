import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/landing/ladingPage'
import Login from './pages/login/login'
import Aluno from './pages/cadastro_aluno/cadastroAluno'
import Professor from './pages/cadastro_prof/cadastroProf'
import Aula from './pages/aula/aula'
import NaoEncontrada from './pages/naoencontrada/naoencontrada'

const rotas = (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/aluno" component={Aluno} />
                <Route exact path="/professor" component={Professor} />
                <Route exact path="/aula" component={Aula} />
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