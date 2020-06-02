import Menu from '../../components/menu';
import Footer from '../../components/footer';
import './landingPage.css';

import React from 'react';

function Main() {
    return (
        <div>
            <Menu />
            <div className="div1">
                <h1 className="font36">Ensina-Me</h1>
                <p>Aulas online com professores especializados para o ensino fundamental</p>
            </div>
            <div className="textCenter">
                <p className="font36">A melhor plataforma para aulas particulares online</p>
                <p>Faça aulas particulares com os melhores professores de todo o Brasil, diretamente de sua casa.</p>
                <p>Oferecemos uma solução de fácil usabilidade, repleta de recursos e com a mais alta qualidade.</p>
            </div>
            <div className="vantagens displayFlex">
                <div className="conteudo_vantagem textCenter">
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>PRATICIDADE</h3>
                    <p>Aprenda direto de sua casa e no melhor horário para você.</p>
                </div>
                <div className="conteudo_vantagem textCenter">
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>QUALIDADE</h3>
                    <p>Estude com os melhores professores de todo o Brasil.</p>
                </div>
                <div className="conteudo_vantagem textCenter">
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>ECONOMIA</h3>
                    <p>Planos personalizados e com aulas que cabem no seu bolso.</p>
                </div>
            </div>
            <div className="textCenter">
                <p>A melhor qualidade de ensino, com a atenção e o acompanhamento que seu filho merece</p>
            </div>
            <div className="planos textCenter">
                <h2 className="font36">Um plano para a sua realidade</h2>
                <p>Temos três opções de planos para que você escolha a que melhor se encaixe a suas necessidades!</p>
                <div className="div_planos displayFlex">
                    <div className="plano_card">
                        <h3>PLANO 1</h3>
                        <p>Nulla non libero
                        dapibus leo et, sagittis
                        Proin porta libero vel
                        eget lobortis mauris
                        Nam eu luctus ante. In
                        ullamcorper in velit vitae
                     </p>
                        <button>SAIBA MAIS</button>
                    </div>
                    <div className="plano_card">
                        <h3>PLANO 2</h3>
                        <p>Nulla non libero
                        dapibus leo et, sagittis
                        Proin porta libero vel
                        eget lobortis mauris
                        Nam eu luctus ante. In
                    ullamcorper in velit vitae  </p>
                        <button>SAIBA MAIS</button>
                    </div>
                    <div className="plano_card">
                        <h3>PLANO 3</h3>
                        <p>Nulla non libero
                        dapibus leo et, sagittis
                        Proin porta libero vel
                        eget lobortis mauris
                        Nam eu luctus ante. In
                    ullamcorper in velit vitae  </p>
                        <button>SAIBA MAIS</button>
                    </div>
                </div>
            </div>
            <div className="professor displayFlex">
                <h2 className="titulo_professor textCenter displayFlex">ÁREA DO PROFESSOR</h2>
                <div className="conteudo_professor displayFlex">
                    <div className="img_professor">
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="500px" />
                    </div>
                    <div className="texto_professor textCenter">
                        <h3>SEJA PROTAGONISTA DA SUA PRÓPRIA CARREIRA</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <h3>AQUI VOCÊ TERÁ TODO O APOIO QUE PRECISA!</h3>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button>QUERO FAZER PARTE DO ENSINA-ME</button>
                    </div>
                </div>
            </div>
            <div className="contato displayFlex">
                <div className="fale_conosco">
                    <h2>Fale Conosco</h2>
                    <p>Temos um especialista sempre pronto para atendê-los.</p>
                    <div className="fale_item">
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>Endereço</p>
                    </div>
                    <div className="fale_item">
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>E-mail</p>
                    </div>
                    <div className="fale_item">
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>Telefone</p>
                    </div>
                </div>
                <div className="mande_duvidas">
                    <h2>Mande sua Dúvida</h2>
                    <p>Ficou com alguma dúvida?</p>
                    <p>Estamos à sua disposição!</p>

                    <form className="form_contato displayFlex">
                        <input type="text" placeholder="NOME" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="text" placeholder="MENSAGEM" />
                        <input type="submmit" value="ENVIAR" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;