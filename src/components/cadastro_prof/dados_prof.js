import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosProfessor extends Component {
  render() {
    return (
      <section className="form-content my-5">
        <h2 className="mb-4">Dados do Professor</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>Nome</Form.Label> */}
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>Sobrenbome</Form.Label> */}
              <Form.Control type="text" placeholder="Sobrenome" />
            </Form.Group>

            <Form.Group as={Col} xs="7" controlId="formGridText">
              {/* <Form.Label>CPF</Form.Label> */}
              <Form.Control type="text" placeholder="CPF" />
            </Form.Group>

            <Form.Group as={Col} xs="5" controlId="formGridText">
              {/* <Form.Label>RG</Form.Label> */}
              <Form.Control type="text" placeholder="RG" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="6" controlId="formGridDate">
              {/* <Form.Label>Data de Nasc.</Form.Label> */}
              <Form.Control type="date" placeholder="Data de Nascimento" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>Sexo</Form.Label> */}
              <Form.Control type="text" placeholder="Sexo" />
            </Form.Group>

            <Form.Group as={Col} xs="12" controlId="formGridText">
              {/* <Form.Label>E-mail</Form.Label> */}
              <Form.Control type="text" placeholder="Endereço" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridEmail">
              {/* <Form.Label>E-mail</Form.Label> */}
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridTel">
              {/* <Form.Label>Telefone</Form.Label> */}
              <Form.Control type="tel" placeholder="Telefone" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="mb-0">
            <Form.Group as={Col} controlId="formGridNumber" className="text-right">
              <Link to="/professor2" as={Col} xs="12" className="btn ensiname">Próximo</Link>
            </Form.Group>
          </Form.Row>

        </Form>
      </section>
    )
  }
}

export default DadosProfessor;