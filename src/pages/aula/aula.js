import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import { Row, Table, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Aula() {
  return (
    <div>
      <Menu />
      <main className="px-5">
        <h1>Plano de Ensino</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non libero mattis, dapibus leo et, sagittis erat. Proin porta libero vel orci euismod, eget lobortis mauris pellentesque. Nam eu luctus ante. In hac habitasse platea dictumst. Etiam auctor eget nunc eu tempus. </p>

        <Row>
          <div className="col-12">

            <Table responsive>
              <thead>
                <tr>
                  <th>Atividades</th>
                  <th>Data de entrega</th>
                  <th>Data da aula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atividade 1<br /><a href="">https://link-para-plataforma.com.br</a></td>
                  <td>20/05/2020</td>
                  <td>15/05/2020</td>
                </tr>
                <tr>
                  <td>Atividade 2 <br /><a href="">https://link-para-plataforma.com.br</a></td>
                  <td>10/06/2020</td>
                  <td>16/06/2020</td>
                </tr>
              </tbody>
            </Table>
            <hr className="mt-0" />
          </div>
        </Row>

        <Form>
          <Form.Row>
            <Form.Group as={Col} xs="12" controlId="exampleForm.ControlTextarea1">
              <Form.Label>TIRE SUAS DÚVIDAS</Form.Label>
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
          </Form.Row>

          <div className="col-md-3 text-right">
            <Button variant="secondary" type="button">
              Enviar
            </Button>
          </div>
        </Form>

      </main>

      <Footer />
    </div>
  );
};

export default Aula;