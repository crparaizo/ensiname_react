import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import DadosEndereço from '../../components/cadastro_prof/dados_complementar'
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
            <p>Passo 2/3: Cadastro do professor</p>
          </Col>
          <Col className="my-5">
            <DadosEndereço />
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