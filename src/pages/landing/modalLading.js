import React from "react";
import "./modalLanding.css";

function ModalAluno() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg roxo_escuro branco nav_planos">
                <p nav_planos_text className="navbar-brand nav_planos_text">Afinal, o que oferecemos?</p>
            </nav>
            <div className="conteudo_img">
                <div className="img_planoa">
                    <img src={require("../../img/planoa.png")} height="64px" />
                </div>
                <div className="texto_planoa" >
                    <h4>Flexibilidade</h4>
                    <p>Ofereça aulas de onde quiser e no horário que tiver disponível.Você pode encaixar seus alunos nos seus horários vagos para conseguir otimizar a sua rotina!</p>
                    <h4>Infraestrutura de qualidade</h4>
                    <p>A nossa plataforma é completa e com  ela você consegue acesso a um ambiente real de sala de aula, co nto de material, postagem de exercício, resolução de dúvidas, avaliações e muito mais.</p>
                    <h4>Suporte Diferenciado</h4>
                    <p>Com a Ensina-Me, você não está sozinho!Temos uma equipe pedagógica extremamente capacitada, sempre à diposição para lhe oferecer o apoio que precisar. Juntos, vamos oferecer a melhor qualidade de ensino aos nossos alunos.</p>
                </div>
            </div>
            <div className="outro_texto">
                <h4>Sua paixão por ensinar em primeiro lugar</h4>
                <p>Nós valorizamos o professor que ama ensinar e que se preocupa com o ensino de qualidade!
                Sabemos o quão complexa é a arte de ensinar e quantas váriáveis podem influenciar nesse processo.
                Pensando nisso, queremos oferecer a você toda a estrutura de que necessita para poder focar em oferecer as melhores aulas.
                Assim, você terá os feedbacks de nossa base de pais e alunos, obtendo o reconhecimento e a visibilidade que merece, podendo, assim, alcançar alunos de todo o Brasil!</p>
            </div>
            <button className="btna roxo_escuro branco">Cadastre-se já!</button>
        </div>
    )
}

export default ModalAluno;