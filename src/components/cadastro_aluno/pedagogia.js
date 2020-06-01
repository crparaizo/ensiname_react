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

    <section className="my-5">
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

      <Modal size="lg" show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Agende seu horário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="my-5">Veja abaixo os horários em que o Professor está disponivel e agende já a sua primeira aula.</p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridDatetimeLocal" className="d-flex flex-row align-items-center">
                <Form.Label className="mr-2 mb-0">Confira a agenda: </Form.Label>
                <input type="datetime-local" />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>Cancelar</Button>
          <Button variant="secondary">Agendar</Button>
        </Modal.Footer>
      </Modal>
    </section>
  )

}

export default Pedagogia;
