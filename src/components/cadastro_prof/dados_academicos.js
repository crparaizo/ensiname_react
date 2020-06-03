import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosBancarios extends Component {
  render() {
    return (
      <section className="form-content my-5">
        <h2 className="mb-4">Dados Bancários</h2>
        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="formGridText">
              {/* <Form.Label>Nome</Form.Label> */}
              <Form.Control type="text" placeholder="Banco" />
            </Form.Group>

            <Form.Group as={Col} xs="8" controlId="formGridText">
              {/* <Form.Label>Sobrenbome</Form.Label> */}
              <Form.Control type="text" placeholder="Tipo de Conta" />
            </Form.Group>

            <Form.Group as={Col} xs="4" controlId="formGridText">
              {/* <Form.Label>CPF</Form.Label> */}
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>

            <Form.Group as={Col} xs="12" controlId="formGridText">
              {/* <Form.Label>CPF</Form.Label> */}
              <Form.Control type="text" placeholder="CPF" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>RG</Form.Label> */}
              <Form.Control type="number" placeholder="Agência" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>Sexo</Form.Label> */}
              <Form.Control type="text" placeholder="DV Agência" />
            </Form.Group>
            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>RG</Form.Label> */}
              <Form.Control type="number" placeholder="Conta" />
            </Form.Group>

            <Form.Group as={Col} xs="6" controlId="formGridText">
              {/* <Form.Label>Sexo</Form.Label> */}
              <Form.Control type="text" placeholder="DV Conta" />
            </Form.Group>


          </Form.Row>

          <Form.Row className="mb-0">
            <Form.Group as={Col} controlId="formGridNumber" className="text-right">
              <Link to="/professor2" as={Col} xs="12" className="btn outline-ensiname mr-2">Voltar</Link>
              <Link to="/" as={Col} xs="12" className="btn ensiname">Finalizar</Link>
            </Form.Group>
          </Form.Row>

        </Form>
      </section>
    )
  }
}

export default DadosBancarios;