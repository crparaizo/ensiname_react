import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosAlunos from '../../components/cadastro_aluno/dados_aluno'
import DadosResponsavel from '../../components/cadastro_aluno/dados_responsavel'
import Pedagogia from '../../components/cadastro_aluno/pedagogia'

function Aluno() {
    return (
        <div className="px-5">
            <Menu />
            <h1>CADASTRO</h1>
            <hr />
            <DadosAlunos />
            <hr />
            <DadosResponsavel />
            <hr />
            <Pedagogia />
            <Footer />
        </div>
    );
};

export default Aluno;
