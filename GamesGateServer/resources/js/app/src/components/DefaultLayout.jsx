import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLogin } from '../context/ContextProvider';
import axiosClient from '../axiosClient';

export default function DefaultLayout({children})
{
    // Verificar se o Usuário está logado
    const {token, _setUser, _setToken, user} = useLogin('');
    const navigate = useNavigate();
    
    if (!token){
        return <Navigate to="/login"/>
    }

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient.post('/login', user.email)
            .then(()=>{
                _setUser({});
                _setToken(null);
                navigate('/login');
            })
            .catch((error)=>{
                console.log(error);
            }
        )
    }

    return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/analise/index"> Análises </Link>
            <Link to="/avaliacao/index"> Avaliações </Link>
            <Link to="/biblioteca/index"> Bibliotecas </Link>
            <Link to="/desenvolvedora/index"> Desenvolvedoras </Link>
            <Link to="/genero/index"> Gêneros </Link>
            <Link to="/generodojogo/index"> Conexão entre Gênero e Jogo </Link>
            <Link to="/jogo/index"> Jogos </Link>
            <Link to="/jogonabiblioteca/index"> Conexão entre Jogo e Biblioteca </Link>
            <Link to="/user/index"> Usuários </Link>
        </aside>
        <div className='content'>
            <header>
                <div className="game-library-title">
                  <span role="img" aria-label="game">🎮</span>
                  Biblioteca de Jogos
                </div>
                <div className="game-library-subtitle">
                  Sua coleção de jogos e análises em um só lugar!
                </div>
                <div>
                    {/* Espaço em Branco = &nbsp; */}
                    { user.apelido } &nbsp; &nbsp;
                    <a onClick={onLogout} className='btn-logout' href="#"> Logout </a>
                </div>
            </header>
            <main>
                { children }
            </main>
        </div>
    </div>
    )
}