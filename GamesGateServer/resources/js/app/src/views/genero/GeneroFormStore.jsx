import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function GeneroFormStore() {
    const navigate = useNavigate();

    const [genero, setGenero] = useState({
        id: null,
        nome: '',
        descricao: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/genero/store`, genero)
            .then(() => {
                setGenero({
                    id: null,
                    nome: '',
                    descricao: '',
                });
                console.log('Gênero incluído com sucesso');
                navigate('/genero/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Gênero</div>

                <label>Nome do Gênero</label>
                <input
                    type="text"
                    value={genero.nome}
                    onChange={e => setGenero({ ...genero, nome: e.target.value })}
                    required
                />

                <label>Descrição</label>
                <input
                    type="text"
                    value={genero.descricao}
                    onChange={e => setGenero({ ...genero, descricao: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/genero/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default GeneroFormStore