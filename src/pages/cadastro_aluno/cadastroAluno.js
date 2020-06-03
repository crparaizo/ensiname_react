import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosAlunos from '../../components/cadastro_aluno/dados_aluno'
import DadosResponsavel from '../../components/cadastro_aluno/dados_responsavel'
import Pedagogia from '../../components/cadastro_aluno/pedagogia'
import './style.css'

function Aluno() {
  return (
    <main className="content">
      <Menu />
      <div className="px-5">
        <h1 className="my-5">CADASTRO</h1>
        <hr />
        <DadosAlunos />
        <hr />
        <DadosResponsavel />
        <hr />
        <Pedagogia />
      </div>
      <Footer />
    </main>
  );
};

export default Aluno;
