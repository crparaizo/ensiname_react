import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosProfessor extends Component {
  render() {
    return (
      <section className="my-5">
        <h2 className="mb-4">DADOS PESSOAIS</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridText">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label>CPF</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label>RG</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridText">
              <Form.Label>Endereço</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label>Cidade</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="6" sm="6" md="4" controlId="formGridDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="4" controlId="formGridText">
              <Form.Label>Sexo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="12" sm="12" md="4" controlId="formGridTel">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridText">
              <Form.Label>Aula</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
          </Form.Row>

        </Form>
      </section>
    )
  }
}

export default DadosProfessor;