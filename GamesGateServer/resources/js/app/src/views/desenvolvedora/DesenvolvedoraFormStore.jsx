import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function DesenvolvedoraFormStore() {
    const navigate = useNavigate();

    const [desenvolvedora, setDesenvolvedora] = useState({
        id: null,
        nome: '',
        email: '',
        descricao: '',
        pais: '',
        site: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/desenvolvedora/store`, desenvolvedora)
            .then(() => {
                setDesenvolvedora({
                    id: null,
                    nome: '',
                    email: '',
                    descricao: '',
                    pais: '',
                    site: '',
                });
                console.log('Desenvolvedora incluída com sucesso');
                navigate('/desenvolvedora/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Desenvolvedora</div>

                <label>Nome</label>
                <input
                    type="text"
                    value={desenvolvedora.nome}
                    onChange={e => setDesenvolvedora({ ...desenvolvedora, nome: e.target.value })}
                    required
                />

                <label>Email</label>
                <input
                    type="email"
                    value={desenvolvedora.email}
                    onChange={e => setDesenvolvedora({ ...desenvolvedora, email: e.target.value })}
                    required
                />

                <label>Descrição</label>
                <input
                    type="text"
                    value={desenvolvedora.descricao}
                    onChange={e => setDesenvolvedora({ ...desenvolvedora, descricao: e.target.value })}
                    required
                />

                <label>País</label>
                <input
                    type="text"
                    value={desenvolvedora.pais}
                    onChange={e => setDesenvolvedora({ ...desenvolvedora, pais: e.target.value })}
                    required
                />

                <label>Site</label>
                <input
                    type="text"
                    value={desenvolvedora.site}
                    onChange={e => setDesenvolvedora({ ...desenvolvedora, site: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/desenvolvedora/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default DesenvolvedoraFormStore