import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function GeneroDoJogoFormStore() {
    const navigate = useNavigate();

    const [generoDoJogo, setGeneroDoJogo] = useState({
        id: null,
        genero_id: '',
        jogo_id: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/generodojogo/store`, generoDoJogo)
            .then(() => {
                setGeneroDoJogo({
                    id: null,
                    genero_id: '',
                    jogo_id: '',
                });
                console.log('Conexão entre Gênero e Jogo criada com sucesso!');
                navigate('/generodojogo/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Conexão entre Gênero e Jogo</div>

                <label>ID do Gênero</label>
                <input
                    type="text"
                    value={generoDoJogo.genero_id}
                    onChange={e => setGeneroDoJogo({ ...generoDoJogo, genero_id: e.target.value })}
                    required
                />

                <label>ID do Jogo</label>
                <input
                    type="text"
                    value={generoDoJogo.jogo_id}
                    onChange={e => setGeneroDoJogo({ ...generoDoJogo, jogo_id: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/generodojogo/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default GeneroDoJogoFormStore