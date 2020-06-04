import Menu from '../../components/menu';
import Footer from '../../components/footer';
import './landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

function Main() {
    return (
        <div>
            <div className="banner d-flex flex-column">
                <Menu />
            </div>
            <div className="textCenter">
                <p className="font36">A melhor plataforma para aulas particulares online</p>
                <p className="font22">Faça aulas particulares com os melhores professores de todo o Brasil, diretamente de sua casa.</p>
                <p className="font22">Oferecemos uma solução de fácil usabilidade, repleta de recursos e com a mais alta qualidade.</p>
            </div>
            <div className="vantagens displayFlex">
                <div className="conteudo_vantagem textCenter roxo">
                    <img src={require("../../img/educacao.png")} height="64px" />
                    <h3>PRATICIDADE</h3>
                    <p>Aprenda direto de sua casa e no melhor horário para você.</p>
                </div>
                <div className="conteudo_vantagem textCenter amarelo">
                    <img src={require("../../img/educacao.png")} height="64px" />
                    <h3>QUALIDADE</h3>
                    <p>Estude com os melhores professores de todo o Brasil.</p>
                </div>
                <div className="conteudo_vantagem textCenter cinza">
                    <img src={require("../../img/educacao.png")} height="64px" />
                    <h3>ECONOMIA</h3>
                    <p>Planos personalizados e com aulas que cabem no seu bolso.</p>
                </div>
                <img className="img_vantagens" src={require("../../img/lapis.png")} />
            </div>
            <div className="amarelo textCenter div4 displayFlex">
                <p className="textTransicao">"A melhor qualidade de ensino, com a atenção e o acompanhamento que seu filho merece"</p>
            </div>
            <div className="planos textCenter displayFlex">
                <h2 className="font36">Conheça Nossos Planos</h2>
                <p className="font22">Temos três opções de planos para que você escolha a que melhor se encaixe a suas necessidades!</p>
                <div className="div_planos displayFlex">
                    <div className="plano_card displayFlex">
                        <div className="roxo_escuro">
                            <h3 className="titulo_plano">PLANO BÁSICO</h3>
                            <p className="preco_plano">R$ 399,00</p>
                        </div>
                        <ul className="lista_plano">
                            <li>Plano de aulas</li>
                            <li>Aulas exclusivas</li>
                            <li>Plano Pedagogico</li>
                            <li>4 Aulas</li>
                            <li className="cinzaClaro">Atividades Extras</li>
                            <li className="cinzaClaro">Plantão tira dúvidas</li>
                        </ul>
                        <button className="amarelo">SAIBA MAIS</button>
                    </div>
                    <div className="plano_card displayFlex">
                        <div className="roxo_escuro">
                            <h3 className="titulo_plano">PLANO MÉDIO</h3>
                            <p className="preco_plano"> R$ 769,00</p>
                        </div>
                        <ul className="lista_plano">
                            <li>Plano de aulas</li>
                            <li>Aulas exclusivas</li>
                            <li>Plano Pedagogico</li>
                            <li>8 Aulas</li>
                            <li className="cinzaClaro">Atividades Extras</li>
                            <li className="cinzaClaro">Plantão tira dúvidas</li>
                        </ul>
                        <button className="amarelo">SAIBA MAIS</button>
                    </div>
                    <div className="plano_card displayFlex">
                        <div className="roxo_escuro">
                            <h3 className="titulo_plano">PLANO MASTER</h3>
                            <p className="preco_plano">R$ 1.149,00</p>
                        </div>
                        <ul className="lista_plano">
                            <li>Plano de aulas</li>
                            <li>Aulas exclusivas</li>
                            <li>Plano Pedagogico</li>
                            <li>12 Aulas</li>
                            <li>Atividades Extras</li>
                            <li >Plantão tira dúvidas</li>
                        </ul>
                        <button className="amarelo">SAIBA MAIS</button>
                    </div>
                </div>
            </div>
            <div className="professor displayFlex">
                <div className="conteudo_professor displayFlex">
                    <div className="texto_professor branco textCenter">
                        <h2 className="titulo_professor branco displayFlex">Professor</h2>
                        <h3 className="font22">SEJA PROTAGONISTA DA SUA PRÓPRIA CARREIRA</h3>
                        <p> Já pensou em  focar na sua paixão por ensinar, tomando suas próprias decisões? Se cadastrando em nossa plataforma, você terá flexibilidade e poderá trabalhar de onde e quando quiser.</p>
                        <p> Conquiste mais alunos! Receba feedbacks, fique nas melhores posições de nosso ranking, ganhe visibilidade e ofereça as suas aulas para alunos em todo o Brasil.</p>
                        <div className="btn_prof textCenter">
                            <button className="amarelo btn_item ">SAIBA MAIS</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contato displayFlex">
                <div className="fale_conosco textCenter">
                    <h2 className="font36">Fale Conosco</h2>
                    <p className="font22">Temos um especialista sempre pronto para atendê-los.</p>
                    <div className="fale_item displayFlex">
                        <img src={require("../../img/endereco.png")} height="32px" />
                        <p>Avenida Paulista, 456 | Sala 82</p>
                    </div>
                    <div className="fale_item displayFlex">
                        <img src={require("../../img/email.png")} height="32px" />
                        <p>contato@ensiname.com.br</p>
                    </div>
                    <div className="fale_item displayFlex">
                        <img src={require("../../img/telefone.png")} height="32px" />
                        <p>(11) 3625-3625</p>
                    </div>
                    {/* Falta mudar esse icone: */}
                    <div className="fale_item displayFlex">
                        <img src={require("../../img/telefone.png")} height="32px" />
                        <p>www.ensiname.com.br</p>
                    </div>
                </div>
                <div className="mande_duvidas displayFlex">
                    <h2 className="font36">Mande sua Dúvida</h2>
                    <p className="font22">Ficou com alguma dúvida?</p>
                    <p className="font22">Estamos à sua disposição!</p>

                    <form className="form_contato displayFlex">
                        <input className="item_form" type="text" placeholder="NOME" />
                        <input className="item_form" type="text" placeholder="EMAIL" />
                        <input className="item_form" type="text" placeholder="MENSAGEM" />
                        <input className="btn_form roxo_escuro" type="submmit" value="ENVIAR" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;