import React, { Component, useState } from 'react'
import { Form, Button, Row, Modal, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pedagogia() {

  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (

    <>
    <Row className="d-flex align-items-center">
        <div className="col-md-9">
          <h2>ATENDIMENTO PEDAGÓGICO ESPECIALIZADO</h2>
          <p>Seja atendido por nossa equipe pedagógica e receba um planejamento de estudos inteiramente personalizado, individualizado de acordo com as suas necessidades, características e habilidades.</p>
        </div>
        <div className="col-md-3 text-right">
          <Button variant="secondary" type="button" onClick={showModal}>
            AGENDE AGORA
          </Button>
        </div>
      </Row>

        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Agende seu horário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Veja abaixo os horários em que o |Nome Professor| está disponivel e agende já a sua primeira aula.</p>
            <Form>
              <Form.Row>
                <Form.Group as={Col} xs="6" sm="6" md="4" controlId="formGridDatetimeLocal">
                  <Form.Label>Confira a agenda</Form.Label>
                  <input type="datetime-local"/>
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
            <Button variant="primary">Agendar</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
    
}

export default Pedagogia;
