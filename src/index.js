import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/landing/landingPage'
import Login from './pages/login/login'
import Aluno1 from './pages/cadastro_aluno/cadastroAluno01'
import Aluno2 from './pages/cadastro_aluno/cadastroAluno02'
import Aluno3 from './pages/cadastro_aluno/cadastroAluno03'
import Aluno4 from './pages/cadastro_aluno/cadastroAluno04'
import Aluno5 from './pages/cadastro_aluno/cadastroAluno05'
import Professor1 from './pages/cadastro_prof/cadastroProf01'
import Professor2 from './pages/cadastro_prof/cadastroProf02'
import Professor3 from './pages/cadastro_prof/cadastroProf03'
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
                <Route exact path="/aluno1" component={Aluno1} />
                <Route exact path="/aluno2" component={Aluno2} />
                <Route exact path="/aluno3" component={Aluno3} />
                <Route exact path="/aluno4" component={Aluno4} />
                <Route exact path="/aluno5" component={Aluno5} />
                <Route exact path="/professor1" component={Professor1} />
                <Route exact path="/professor2" component={Professor2} />
                <Route exact path="/professor3" component={Professor3} />
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