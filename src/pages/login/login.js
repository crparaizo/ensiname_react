import React from 'react';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import { Form, Col, Button, Row } from 'react-bootstrap';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Login() {
  return (
    <div>
      <Menu />
      <main className="login-form">
        <Row>
          <img src="" alt="logotipo" />
        </Row>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Button variant="secondary" type="button" as={Col} xs="12">
                LOGIN COM O GOOGLE
              </Button>
            </Form.Group>
          </Form.Row>

          <Row className="d-flex flex-row">
            <hr className="hr-login col-3" />
            <p className="col-1 text-center">ou</p>
            <hr className="hr-login col-3" />
          </Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridText">
              <Form.Control type="text" placeholder="USUÁRIO" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Control type="password" placeholder="SENHA" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber">
              <Button variant="secondary" type="button" as={Col} xs="12">
                ENTRAR
              </Button>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber" className="d-flex flex-row align-items-center">
              <input type="checkbox" className="mr-2" />
              <Form.Label className="mb-0">LEMBRAR</Form.Label>
            </Form.Group>
            <Form.Group controlId="formGridCheckbox" >
              <a href="#">ESQUECI MINHA SENHA</a>
            </Form.Group>
          </Form.Row>

        </Form>
      </main>
      <Footer />
    </div >
  );
};

export default Login;