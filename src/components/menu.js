import React, { Component } from 'react'
import './menu.css';

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="imgMenu">
                        <img style={{color:"white"}} src={require("../../src/img/logoBranco.png")} alt="logotipo" height="60px" />
                    </div>
                    <div className="collapse navbar-collapse n" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/aluno1">Aluno</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/professor1">Professor</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/aula">Aula</a>
                            </li>
                            <li className="nav-item active link_login">
                                <a className="nav-link " href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;