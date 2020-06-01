import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosResponsavel extends Component {
  render() {
    return (
      <>
      <h2>DADOS DO RESPONSÁVEL</h2>
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

          <Form.Group as={Col} xs="12" sm="12" md="6" controlId="formGridEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridTel">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>

          <Form.Group as={Col} xs="6" sm="6" md="3" controlId="formGridTel">
            <Form.Label>Celular</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>
        
          <Form.Group as={Col} controlId="formGridTel" className="d-flex justify-content-end">
            <Button variant="secondary" type="submit" >
              SALVAR
            </Button>
          </Form.Group>

        </Form.Row>


      </Form>
      </>
    )
  }
}

export default DadosResponsavel;