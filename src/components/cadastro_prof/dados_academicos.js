import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosAcademicos extends Component {
  render() {
    return (
      <>
        <h2>FORMAÇÃO ACADÊMICA</h2>
        <Form>
          <Form.Row>
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

          <div className="col-md-3 text-right">
            <Button variant="secondary" type="button">
              ADICIONAR FORMAÇÃO
            </Button>
          </div>

        </Form>
      </>
    )
  }
}

export default DadosAcademicos;