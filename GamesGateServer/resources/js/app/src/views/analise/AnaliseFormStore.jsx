import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function AnaliseFormStore() {
    const navigate = useNavigate();

    const [analise, setAnalise] = useState({
        id: null,
        titulo: '',
        curtidas: '',
        user_id: '',
        jogo_id: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/analise/store`, analise)
            .then(() => {
                setAnalise({
                    id: null,
                    titulo: '',
                    curtidas: '',
                    user_id: '',
                    jogo_id: '',
                });
                console.log('Análise incluída com sucesso');
                navigate('/analise/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Análise</div>

                <label>Título da Análise</label>
                <input
                    type="text"
                    value={analise.titulo}
                    onChange={e => setAnalise({ ...analise, titulo: e.target.value })}
                    required
                />

                <label>Número de Curtidas</label>
                <input
                    type="number"
                    value={analise.curtidas}
                    onChange={e => setAnalise({ ...analise, curtidas: e.target.value })}
                    required
                />

                <label>ID do Usuário</label>
                <input
                    type="text"
                    value={analise.user_id}
                    onChange={e => setAnalise({ ...analise, user_id: e.target.value })}
                    required
                />

                <label>ID do Jogo</label>
                <input
                    type="text"
                    value={analise.jogo_id}
                    onChange={e => setAnalise({ ...analise, jogo_id: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/analise/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default AnaliseFormStore