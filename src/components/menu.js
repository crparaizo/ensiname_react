import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <div className="">
                        <img src={require("../../src/img/logo.svg")} alt="logotipo" height="32px" />
                    </div>
                    <div className="collapse navbar-collapse n" >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/aluno">Aluno</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/professor">Professor</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/aula">Aula</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Menu;