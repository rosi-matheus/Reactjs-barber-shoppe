import React from 'react';
import { useState } from 'react';
import './home.css';


export default function Home() {

    const [alteraEstilo, setAlteraEstilo] = useState(false);

    const alteraCor = () => {

        setAlteraEstilo(!alteraEstilo);
    }

    const [alteraImagem, setAlterarImagem] = useState(false);

    const alterarImagem = () => {

        setAlterarImagem(!alteraImagem);

    }

    const alterarEstilos = () => {
        alteraCor();
        alterarImagem();
    }

    return (
        <section className={alteraEstilo ? 'secao-main-claro' : 'secao-main-dark'}>
            <header className="secao-header">
                <div>
                    <img className={alteraImagem ? 'logo-header' : 'logo-header-2'} src="./assets/barbearia-logo.png" alt="" />
                </div>
                <button onClick={alterarEstilos} className={alteraEstilo ? 'secao-main-claro' : 'secao-main-dark'}>
                    <img src={alteraEstilo ? './assets/moon.png' : './assets/sun.png'} />
                    {alteraEstilo ? 'Dark' : 'Light'}
                </button>
            </header>
            <section className="secao-banner">

            </section>
            <section className="secao-boas-vindas">
                <div className="secao-descricao">
                    <h1>Bem-vindo a Barber Shop</h1>
                    <p>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                    
                </div>
            </section>
            <p className="assinatura">Dev Rosiane Aparecida da Silva</p>
            
        </section>

    );
}

