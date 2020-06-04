import React from "react";
import ".//modalLanding.css";

const ModalAluno = props => {
    const { className, modalRef } = props;

    return(
        <div ref={modalRef} className={`${className} modal`}>
            <p>ALUNO!!!</p>
        </div>
    )
}

export default ModalAluno;