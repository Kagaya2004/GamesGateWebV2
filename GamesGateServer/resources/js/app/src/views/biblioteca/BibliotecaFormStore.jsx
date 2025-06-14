import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function BibliotecaFormStore() {
    const navigate = useNavigate();

    const [biblioteca, setBiblioteca] = useState({
        id: null,
        user_id: '',
        quantidadeJogos: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/biblioteca/store`, biblioteca)
            .then(() => {
                setBiblioteca({
                    id: null,
                    user_id: '',
                    quantidadeJogos: ''
                });
                console.log('Biblioteca incluída com sucesso');
                navigate('/biblioteca/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Biblioteca</div>

                <label>ID do Usuário</label>
                <input
                    type="text"
                    value={biblioteca.user_id}
                    onChange={e => setBiblioteca({ ...biblioteca, user_id: e.target.value })}
                    required
                />

                <label>Quantidade de Jogos</label>
                <input
                    type="text"
                    value={biblioteca.quantidadeJogos}
                    onChange={e => setBiblioteca({ ...biblioteca, quantidadeJogos: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/biblioteca/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default BibliotecaFormStore