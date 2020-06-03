import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import { Row, Table, Col, Form, Button, Accordion, Card } from 'react-bootstrap';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Aula() {
  return (
    <div className="content">
      <Menu />
      <main className="px-5">
        <h1 className="mt-5">Plano de Ensino</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non libero mattis, dapibus leo et, sagittis erat. Proin porta libero vel orci euismod, eget lobortis mauris pellentesque. Nam eu luctus ante. In hac habitasse platea dictumst. Etiam auctor eget nunc eu tempus. </p>

        <Row className="my-5">
          <div className="col-12">
            <Table responsive className="border-bottom mt-5">
              <thead>
                <tr>
                  <th className="atividades">Atividades</th>
                  <th className="data-entrega">Data de entrega</th>
                  <th className="data-aula">Data da aula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="atividades">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Atividade 1
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="1">
                        <a className="ml-4" href="">https://link-para-plataforma.com.br</a>
                      </Accordion.Collapse>
                    </Accordion>
                  </td>
                  <td className="data-entrega">20/05/2020</td>
                  <td className="data-aula">15/05/2020</td>
                </tr>
                <tr>
                <td className="atividades">
                    <Accordion defaultActiveKey="1">
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Atividade 2
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="2">
                        <a className="ml-4" href="">https://link-para-plataforma.com.br</a>
                      </Accordion.Collapse>
                    </Accordion>
                  </td>
                  <td className="data-entrega">10/06/2020</td>
                  <td className="data-aula">16/06/2020</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>

        <Form>
          <Form.Row className="mt-5">
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1">
              <Form.Label>TIRE SUAS DÚVIDAS</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1" className="d-flex justify-content-end">
              <Button variant="secondary" type="button">
                Enviar
            </Button>
            </Form.Group>
          </Form.Row>
        </Form>

      </main>

      <Footer />
    </div>
  );
};

export default Aula;