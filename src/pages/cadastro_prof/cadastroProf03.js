import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosBancarios from '../../components/cadastro_prof/dados_academicos'
import { Col, Container, Row } from 'react-bootstrap';
import './style.css'

function Professor() {
  return (
    <div className="cadastro-professor">
      <Menu />
      <Container>
        <Row>
          <Col className="my-5">
            <h1 className="">CADASTRO</h1>
            <p>Passo 3/3: Cadastro do professor</p>
          </Col>
          <Col className="my-5">
            <DadosBancarios />
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Professor;