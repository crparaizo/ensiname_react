import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dados_aluno.css'

class Pedagogia extends Component {
  render() {
    return (
      <section className="form-content my-5">
        <h2 className="mb-5">Agende um horário com um de nossos pedagogos</h2>
        <p>Horários disponíveis:</p>
        <Form>
          <Form.Row className="mb-5">
            <Form.Group as={Col} xs="12" controlId="formGridDatetime">
              {/* <Form.Label>Data de Nasc.</Form.Label> */}
              <Form.Control type="datetime-local" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="">
            <Form.Group as={Col} controlId="formGridNumber" className="text-right">
              <Link to="/" as={Col} xs="12" className="btn outline-ensiname mr-2">Agendar depois</Link>
              <Link to="/aula" as={Col} xs="12" className="btn ensiname">Agendar agora</Link>
            </Form.Group>
          </Form.Row>

        </Form>
      </section>
    )
  }
}

export default Pedagogia;