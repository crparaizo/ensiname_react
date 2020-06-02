import Menu from './../../components/menu';
import Footer from './../../components/footer';

import React from 'react';

function Main() {
    return (
        <div>
            <Menu />
            <h1>Página Inicial</h1>
            <Footer />
            <div className="div1">
                <h1>Ensina-Me</h1>
                <p>Aulas online com professores especializados para o ensino fundamental</p>
            </div>
            <div className="div2">
                <p>A melhor plataforma para aulas particulares online</p>
                <p>Faça aulas particulares com os melhores professores de todo o Brasil, diretamente de sua casa.</p>
                <p>Oferecemos uma solução de fácil usabilidade, repleta de recursos e com a mais alta qualidade.</p>
            </div>
            <div className="vantagens">
                <div>
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>PRATICIDADE</h3>
                    <p>Aprenda direto de sua casa e no melhor horário para você.</p>
                </div>
                <div>
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>QUALIDADE</h3>
                    <p>Estude com os melhores professores de todo o Brasil.</p>
                </div>
                <div>
                    <img src={require("../../img/logo.svg")} alt="logotipo" height="64px" />
                    <h3>ECONOMIA</h3>
                    <p>Planos personalizados e com aulas que cabem no seu bolso.</p>
                </div>
            </div>
            <div className="div4">
                <p>A melhor qualidade de ensino, com a atenção e o acompanhamento que seu filho merece</p>
            </div>
            <div className="planos">
                <h2>Um plano para a sua realidade</h2>
                <p>Temos três opções de planos para que você escolha a que melhor se encaixe a suas necessidades!</p>
                <div>
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
                <div>
                    <h3>PLANO 2</h3>
                    <p>Nulla non libero
                    dapibus leo et, sagittis
                    Proin porta libero vel
                    eget lobortis mauris
                    Nam eu luctus ante. In
                    ullamcorper in velit vitae  </p>
                    <button>SAIBA MAIS</button>
                </div>
                <div>
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
            <div className="professor">
                <h2>ÁREA DO PROFESSOR</h2>
                <div>
                    <div>
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="100px" />
                    </div>
                    <div>
                        <h3>SEJA PROTAGONISTA DA SUA PRÓPRIA CARREIRA</h3>
                        <p></p>
                        <h3>AQUI VOCÊ TERÁ TODO O APOIO QUE PRECISA!</h3>
                        <p></p>
                        <button>QUERO FAZER PARTE DO ENSINA-ME</button>
                    </div>
                </div>                
            </div>
            <div className="contato">
                <div className="fale_conosco">
                    <h2>FALE CONOSCO</h2>
                    <p>Temos um especialista sempre pronto para atendê-los.</p>
                    <div>
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>Endereço</p>
                    </div>
                    <div>
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>E-mail</p>
                    </div>
                    <div>
                        <img src={require("../../img/logo.svg")} alt="logotipo" height="32px" />
                        <p>Telefone</p>
                    </div>
                </div>
                <div className="mande_duvidas">
                    <h2>FALE CONOSCO</h2>
                    <p>Ficou com alguma dúvida?</p>
                    <p>Estamos à sua disposição!</p>

                    <form>
                        <input type="text" placeholder="NOME" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="text" placeholder="MENSAGEM" />
                        <input type="submmit" value="ENVIAR" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;