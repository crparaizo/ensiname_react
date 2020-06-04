import React, { Component } from 'react'
import "./modalLanding.css";


class ModalAluno extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const className = this.props.className;
        const modalRef = this.props.modalRef;

        return (
            <div>
                <div ref={modalRef} className={`${className} modal`}>
                    <p>Meu modal!</p>
                </div>
            </div>  
        )
    }                 
}

export default ModalAluno;


// const ModalAluno = props => {
//     const { className, modalRef } = props;

//     return(
//         <div ref={modalRef} className={`${className} modal`}>
//             <p>Meu modal - ALUNO</p>
//         </div>
//     )
// }
   
// export default ModalAluno;