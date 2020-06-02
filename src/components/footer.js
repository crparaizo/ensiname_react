import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: "black", textAlign: "right", paddingRight:"50px" }}>
                <img src={require("../../src/img/logo.svg")} alt="logotipo" height="32px" />
                <img src={require("../../src/img/logo.svg")} alt="logotipo" height="32px" />                         
            </div>
        )
    }
}

export default Footer;