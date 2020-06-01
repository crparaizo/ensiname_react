import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosProfessor extends Component {
  render() {
    return (
      <section className="my-5">
        <h2 className="mb-4">ATUAÇÃO PROFISSIONAL</h2>
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
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="mb-4">
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Principais Atividades</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1" className="d-flex justify-content-end">
              <Button variant="secondary" type="button">
                ADICIONAR ATUAÇÃO
              </Button>
            </Form.Group>
          </Form.Row>

          <div className="col-md-3 text-right">

          </div>

        </Form>
      </section>
    )
  }
}

export default DadosProfessor;