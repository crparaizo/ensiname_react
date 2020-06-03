import React, { Component } from 'react'

class ModalProf extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={require("../../../public/logo192.png")} height="400px" />
                    </div>
                    <div>
                        <h4>FLEXIBILIDADE</h4>
                        <p>Ofereça aulas de onde quiser e no horário que tiver disponível.Você pode encaixar seus alunos nos seus horários vagos para conseguir otimizar a sua rotina!</p>
                        <h4>INFRAESTRUTURA DE QUALIDADE</h4>
                        <p>A nossa plataforma é completa e com  ela você consegue acesso a um ambiente real de sala de aula, co nto de material, postagem de exercício, resolução de dúvidas, avaliações e muito mais.</p>
                        <h4>SUPORTE DIFERENCIADO</h4>
                        <p>Com a Ensina-Me, você não está sozinho! Temos uma equipe pedagógica extremamente capacitada, sempre à diposição para lhe oferecer o apoio que precisar.  Juntos, vamos oferecer a melhor qualidade de ensino aos nossos alunos.</p>
                           </div>

                </div>
                <div>
                    <h4>SUA PAIXÃO POR ENSINAR EM PRIMEIRO LUGAR!</h4>
                    <p>Nós valorizamos o professor que ama ensinar e que se preocupa com o ensino de qualidade!</p>
                <p>Sabemos o quão complexa é a arte de ensinar e quantas váriáveis podem influenciar nesse processo.
                Pensando nisso, queremos oferecer a você toda a estrutura de que necessita para poder focar em oferecer as melhores aulas.
                    Assim, você terá os feedbacks de nossa base de pais e alunos, obtendo o reconhecimento e a visibilidade que merece, podendo, assim, alcançar alunos de todo o Brasil!</p>
                </div>
                <button></button>
            </div>
        )
    }
}

export default ModalProf;