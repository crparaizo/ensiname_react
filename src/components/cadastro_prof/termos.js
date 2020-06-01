import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class DadosProfessor extends Component {
  render() {
    return (
      <>
        <Form>

          <Form.Row className="d-flex flex-row justify-content-between align-items-baseline">
            <Form.Group controlId="formGridCheckbox" className="d-flex flex-row align-items-center">
              <input type="checkbox" className="mr-2"/>
              <Form.Label className="mb-0">Confirmo a veracidade das informações acima.</Form.Label>
            </Form.Group>
            <div className="">
              <Button variant="secondary" type="button" className="mr-2">
                CANCELAR
              </Button>
              <Button variant="secondary" type="button">
                FINALIZAR
              </Button>
            </div>
          </Form.Row>

        </Form>
      </>
    )
  }
}

export default DadosProfessor;