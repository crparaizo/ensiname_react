import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosProfessor from '../../components/cadastro_prof/dados_prof'
import DadosAcademicos from '../../components/cadastro_prof/dados_academicos'
import DadosComplementares from '../../components/cadastro_prof/dados_complementar'
import Profissional from '../../components/cadastro_prof/profissional'
import Termos from '../../components/cadastro_prof/termos'

function Professor() {
  return (
    <>
      <Menu />
      <div className="px-5">
        <h1 className="my-5">CADASTRO</h1>
        <hr />
        <DadosProfessor />
        <hr />
        <DadosAcademicos />
        <hr />
        <DadosComplementares />
        <hr />
        <Profissional />
        <hr />
        <Termos />
        <hr />
      </div>
      <Footer />
    </>
  );
};

export default Professor;