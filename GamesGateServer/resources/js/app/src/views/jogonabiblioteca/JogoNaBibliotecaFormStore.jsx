import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function JogoNaBibliotecaFormStore() {
    const navigate = useNavigate();

    const [jogonabiblioteca, setJogoNaBiblioteca] = useState({
        id: null,
        jogo_id: '',
        biblioteca_id: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/jogonabiblioteca/store`, jogonabiblioteca)
            .then(() => {
                setJogoNaBiblioteca({
                    id: null,
                    jogo_id: '',
                    biblioteca_id: '',
                });
                console.log('Conexão entre Jogo e Biblioteca criada com sucesso');
                navigate('/jogonabiblioteca/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Conexão entre Jogo e Biblioteca</div>

                <label>ID da Biblioteca</label>
                <input
                    type="text"
                    value={jogonabiblioteca.biblioteca_id}
                    onChange={e => setJogoNaBiblioteca({ ...jogonabiblioteca, biblioteca_id: e.target.value })}
                    required
                />

                <label>ID do Jogo</label>
                <input
                    type="text"
                    value={jogonabiblioteca.jogo_id}
                    onChange={e => setJogoNaBiblioteca({ ...jogonabiblioteca, jogo_id: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/jogonabiblioteca/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default JogoNaBibliotecaFormStore