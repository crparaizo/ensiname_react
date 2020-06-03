import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosProfessor from '../../components/cadastro_prof/dados_prof'
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
            <p>Passo 1/3: Cadastro do professor</p>
          </Col>
          <Col className="my-5">
            <DadosProfessor />
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