import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dados_aluno.css'

class DadosAlunos extends Component {
  render() {
    return (
      <section className="form-content my-5">
        <h2 className="mb-4">Dados para cobrança</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="formGridText" className="d-flex flex-row align-items-center">
              {/* <Form.Label>Nome</Form.Label> */}
              <Form.Control type="text" placeholder="Número do cartão" />
              <img className="card-icon" src={require("../../../src/img/camera.svg")} alt="Digitalizar cartão"/>
            </Form.Group>

            <Form.Group as={Col} xs="12" controlId="formGridText">
              {/* <Form.Label>Sobrenbome</Form.Label> */}
              <Form.Control type="text" placeholder="Nome impresso no cartão" />
            </Form.Group>

            <Form.Group as={Col} xs="12" controlId="formGridText">
              {/* <Form.Label>CPF</Form.Label> */}
              <Form.Control type="text" placeholder="CPF" />
            </Form.Group>

            <Form.Group as={Col} xs="8" controlId="formGridText">
              {/* <Form.Label>RG</Form.Label> */}
              <Form.Control type="text" placeholder="Validade" />
            </Form.Group>

            <Form.Group as={Col} xs="4" controlId="formGridText">
              {/* <Form.Label>RG</Form.Label> */}
              <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
          </Form.Row>
          <Form.Row className="mb-0">
            <Form.Group as={Col} controlId="formGridNumber" className="text-right">
              <Link to="/aluno3" as={Col} xs="12" className="btn outline-ensiname mr-2">Voltar</Link>
              <Link to="/aluno5" as={Col} xs="12" className="btn ensiname">Próximo</Link>
            </Form.Group>
          </Form.Row>
        </Form>
      </section>
    )
  }
}

export default DadosAlunos;