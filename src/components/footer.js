import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#220B50", textAlign: "right", paddingRight: "50px" }}>
                <a href="#">
                    <img style={{ margin: "15px" }} src={require("../../src/img/face.png")} alt="logotipo" height="40px" />
                </a>
                <a href="#">
                    <img style={{ margin: "15px" }} src={require("../../src/img/insta.png")} alt="logotipo" height="40px" />
                </a>
            </div>
        )
    }
}

export default Footer;