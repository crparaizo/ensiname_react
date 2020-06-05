import React, { Component } from 'react'
import Menu from './../../components/menu';
import Footer from './../../components/footer';

export default class NaoEncontrada extends Component {
    render() {
        return (
            <div>
                <Menu />
                <h1 style={{alignItems:"center", height:"11.8em", display:"flex", justifyContent:"center"}}>Página não encontrada..Volte para a Home!!! :P</h1>
                <Footer />
            </div>
        )
    }
}