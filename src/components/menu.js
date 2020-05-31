import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <h1> Menu....</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/aluno">Aluno</a></li>
                    <li><a href="/professor">Professor</a></li>
                    <li><a href="/aula">Aula</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        )
    }
}

export default Menu;