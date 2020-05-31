import React, { Component } from 'react'
import Menu from './../../components/menu';
import Footer from './../../components/footer';

export default class NaoEncontrada extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1>Página não encontrada..Volte para a Home!!! :P</h1>
                <Footer />
            </div>
        )
    }
}