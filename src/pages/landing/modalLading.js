import React, { Component } from 'react'

class ModalAluno extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <img src={require("../../../public/logo192.png")} height="400px" />
                    </div>
                    <div>
                        <h4>PROFESSORES DE QUALIDADE</h4>
                        <p>Nossos professores são especializados no ensino fundamental. Todos passam por um rígido processo de seleção, em que são comprovadas as suas capacitações e experiências.Além disso, são classificados em um ranking, a partir das avaliações de pais e alunos, para que as escolhas sejam fundamentadas no reconhecimento público.</p>
                        <h4>ORIENTAÇÃO PEDAGÓGICA INDIVIDUALIZADA</h4>
                        <p>Antes de iniciar as aulas, todos os alunos passam pelo atendimento de nossa equipe pedaógica. Assim, conseguimos identificar as suas características e necessidades. Cada aluno receberá um plano de estudos específico, que guiará a melhor experiência para o seu aprendizado.</p>
                        <h4>MATERIAL DIDÁTICO GRATUITO</h4>
                        <p>Temos ao nosso lado a parceria das melhores editoras do Brasi e, assim, oferecemos gratuitamente um material didático de alta qualidade, para cada uma das disciplinas, que servirá de apoio ao aprendizado de nossos alunos.</p>
                    </div>

                </div>
                <div>
                    <h4>PRATICIDADE, QUALIDADE E ECONOMIA</h4>
                    <p>Com a nossa plataforma de aulas particulares online ficou muito mais fácil aprender com qualidade!</p>
                    <p>Todos sabemos o quanto é importante o estudo fora de sala de aula, pois não é possivel alcançarmos a excelência no aprendizado somente com o tempo vivido dentro da escola.
                    Com a Ensina-Me você tem acesso aos melhores professores do Brasil, podendo oferecer a seu(sua) filho(a) a melhor qualidade de ensino, de onde e quando quiser, com aulas que cabem no seu bolso!</p>
                </div>
                <button value="CADASTRE-SE JÁ"></button>
            </div>
        )
    }
}

export default ModalAluno;