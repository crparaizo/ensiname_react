import React, { useState, useRef } from 'react';
import './teste.css';
import Modal from './modal';

const Testando = () => {

  const [dropdown, setDropdown] = useState(""); 
  const modalRef = useRef(null);

  const toggleDropdown = () => {
    console.log("show");
    //se clicar no botão, modal aparece
    setDropdown("show");
    document.body.addEventListener("click", closeDropdown);
  }

  const closeDropdown = event => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) { //se clicar fora do modal, ele DESaparece
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };

  return (
    <div className="Modal">
      <header className="Modal-header">
        <button onClick={toggleDropdown}>Click Here!</button>
        <Modal className={dropdown} modalRef={modalRef}/>
      </header>
    </div>
  );
}

export default Testando;