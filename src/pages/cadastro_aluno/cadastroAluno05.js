import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import Pedagogia from '../../components/cadastro_aluno/pedagogia'
import { Col, Container, Row } from 'react-bootstrap';
import './style.css'

function Aluno() {
  return (
    <div className="aluno">
      <Menu />
      <Container>
        <Row>
          <Col className="my-5">
            <h1 className="">Agendamento</h1>
            <p>Agendamento com pedagogo</p>
          </Col>
          <Col className="my-5">
            <Pedagogia/>
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
