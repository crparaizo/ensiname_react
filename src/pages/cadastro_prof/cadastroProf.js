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
        <div className="px-5">
            <Menu />
            <h1>Cadastro Professor</h1>
            <hr/>
            <DadosProfessor />
            <hr/>
            <DadosAcademicos />
            <hr/>
            <DadosComplementares />
            <hr/>
            <Profissional />
            <hr/>
            <Termos />
            <hr/>
            <Footer />
        </div>
    );
};

export default Professor;