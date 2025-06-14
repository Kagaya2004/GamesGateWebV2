import React, { Fragment, useState } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate } from 'react-router-dom';

function AvaliacaoFormStore() {
    const navigate = useNavigate();

    const [avaliacao, setAvaliacao] = useState({
        descricao: '',
        analise_id: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/avaliacao/store`, avaliacao)
            .then(() => {
                setAvaliacao({
                    descricao: '',
                    analise_id: '',
                });
                console.log('Avaliação incluída com sucesso');
                navigate('/avaliacao/index')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <Fragment>
            <form className="form-store" onSubmit={onSubmit}>
                <div className="form-title">Inclusão de Avaliação</div>

                <label>Descrição</label>
                <textarea
                    value={avaliacao.descricao}
                    onChange={e => setAvaliacao({ ...avaliacao, descricao: e.target.value })}
                    rows={2}
                    required
                />

                <label>ID da Análise</label>
                <input
                    type="text"
                    value={avaliacao.analise_id}
                    onChange={e => setAvaliacao({ ...avaliacao, analise_id: e.target.value })}
                    required
                />

                <div className="form-store-actions">
                    <button className="btn-save" type="submit">Salvar</button>
                    <Link className="btn-cancel" to="/avaliacao/index">Cancelar</Link>
                </div>
            </form>
        </Fragment>
    )
}

export default AvaliacaoFormStore