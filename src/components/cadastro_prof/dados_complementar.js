import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosComplementares extends Component {
  render() {
    return (
      <section className="my-5">
        <h2 className="mb-4">FORMAÇÃO COMPLEMENTAR</h2>
        <Form>

          <Form.Row className="mb-4">
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridText">
              <Form.Label>Instituição</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="9" sm="9" md="3" controlId="formGridText">
              <Form.Label>Área/Matéria</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="3" sm="3" md="3" controlId="formGridNumber">
              <Form.Label>Ano de conclusão</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1" className="d-flex justify-content-end">
              <Button variant="secondary" type="button">
                ADICIONAR FORMAÇÃO
              </Button>
            </Form.Group>
          </Form.Row>
        </Form>
      </section>
    )
  }
}

export default DadosComplementares;