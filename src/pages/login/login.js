import React from 'react';
import {Link} from 'react-router-dom';
import Menu from './../../components/menu';
import Footer from './../../components/footer';
import { Form, Col, Button, Row } from 'react-bootstrap';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Login() {
  return (
    <div className="login">
      <Menu />
      <div className="login-form px-md-5 px-3">
        <Row className="d-flex justify-content-center pl-3 pb-md-4 pt-1">
          <img src={require("../../../src/img/logoBranco.png")} alt="logotipo" className="logo-img" />
        </Row>
        <Form className="py-2">
          <Form.Row className="mb-0">
            <Form.Group as={Col} controlId="formGridCheckbox" className="d-flex flex-row justify-content-end mb-0">
              <Form.Label className="helper-text mr-2">Novo por aqui?</Form.Label>
                <Link to="/new_account" className="helper-text">Crie sua conta!</Link>
            </Form.Group>
          </Form.Row>
          <Form.Row className="mb-0">
            <Form.Group as={Col} controlId="formGridNumber" >
              <Button variant="outline-primary" type="button" as={Col} xs="12" className="outline-ensiname">
                <img src={require("../../../src/img/google.svg")} alt="Google" className="button-icon mr-2" />
                Login Com Google
              </Button>
            </Form.Group>
          </Form.Row>

          <Row className="d-flex flex-row mb-1">
            <hr className="hr-login col-3" />
            <p className="col-2 text-center">ou</p>
            <hr className="hr-login col-3" />
          </Row>

          <Form.Row className="mb-2">
            <Form.Group as={Col} controlId="formGridText">
              <Form.Control type="text" placeholder="Email" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="mb-2">
            <Form.Group as={Col} controlId="formGridNumber">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
          </Form.Row>

          <Form.Row className="mb-2">
            <Form.Group as={Col} controlId="formGridNumber">
              <Button variant="primary" type="button" as={Col} xs="12" className="ensiname">
                Login
              </Button>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridNumber" className="d-flex flex-row align-items-center">
              <input type="checkbox" className="mr-2" />
              <Form.Label className="helper-text mb-0">Lembrar</Form.Label>
            </Form.Group>
            <Form.Group controlId="formGridCheckbox" >
              <a className="helper-text" href="#">Esqueci minha senha</a>
            </Form.Group>
          </Form.Row>

        </Form>
      </div>
      <div className="footer" >
        <Footer />
      </div>
    </div >
  );
};

export default Login;