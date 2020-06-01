import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosProfessor extends Component {
  render() {
    return (
      <>
        <h2>ATUAÇÃO PROFISSIONAL</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridText">
              <Form.Label>Instituição</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label>Período</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridText">
              <Form.Label></Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" sm="12" md="6" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Principais Atividades</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
          </Form.Row>

          <div className="col-md-3 text-right">
            <Button variant="secondary" type="button">
              ADICIONAR ATUAÇÃO
            </Button>
          </div>

        </Form>
      </>
    )
  }
}

export default DadosProfessor;