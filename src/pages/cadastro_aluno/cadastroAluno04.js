import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosPagamento from '../../components/cadastro_aluno/dados_pagamento'
import { Col, Container, Row } from 'react-bootstrap';
import './style.css'

function Aluno() {
  return (
    <div className="aluno">
      <Menu />
      <Container>
        <Row>
          <Col className="my-5">
            <h1 className="">CADASTRO</h1>
            <p>Passo 4/4: Cadastro do aluno</p>
          </Col>
          <Col className="my-5">
            <DadosPagamento/>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Aluno;
