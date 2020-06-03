import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import './style.css'

function NovaConta() {
  return (
    <div className="nova_conta">
      <Menu />
      <Container>
        <Row className="my-5">
          <h1>Novo Cadastro</h1>
        </Row>
        <Row className="perfis mb-5">
          <Col className="d-flex flex-column justify-content-center">
            <Link to="/aluno1" className="perfil-aluno d-flex flex-column justify-content-center">
              <span className="perfil">Aluno</span>
              <span className="acao">Quero estudar!</span>
            </Link>
          </Col>
          <Col className="border-left pl-5 d-flex flex-column justify-content-center">
            <Link to="/professor1" className="perfil-professor d-flex flex-column justify-content-center">
              <span className="perfil">Professor</span>
              <span className="acao">Quero dar aulas!</span>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default NovaConta;