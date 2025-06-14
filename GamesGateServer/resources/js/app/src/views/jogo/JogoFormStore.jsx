import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function JogoFormStore() {
    const navigate = useNavigate();

    const [jogo, setJogo] = useState({
        id: null,
        nome: '',
        dataLancamento: new Date().toISOString().split('T')[0],
        descricao: '',
        desenvolvedora_id: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/jogo/store`, jogo)
            .then(() => {
                setJogo({
                    id: null,
                    nome: '',
                    dataLancamento: new Date().toISOString().split('T')[0],
                    descricao: '',
                    desenvolvedora_id: '',
                });
                console.log('Jogo incluído com sucesso');
                navigate('/jogo/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Jogo</div>

                <label>Nome do Jogo</label>
                <input
                    type="text"
                    value={jogo.nome}
                    onChange={e => setJogo({ ...jogo, nome: e.target.value })}
                    required
                />

                <label>Data de Lançamento</label>
                <input
                    type="date"
                    value={jogo.dataLancamento}
                    onChange={e => setJogo({ ...jogo, dataLancamento: e.target.value })}
                    required
                />

                <label>Descrição</label>
                <input
                    type="text"
                    value={jogo.descricao}
                    onChange={e => setJogo({ ...jogo, descricao: e.target.value })}
                    required
                />

                <label>ID da Desenvolvedora</label>
                <input
                    type="text"
                    value={jogo.desenvolvedora_id}
                    onChange={e => setJogo({ ...jogo, desenvolvedora_id: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/jogo/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default JogoFormStore